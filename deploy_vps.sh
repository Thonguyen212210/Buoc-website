#!/bin/bash
set -e

DOMAIN="buoc.site"

echo "=== Starting Docker container ==="
cd /var/www/buoc
docker compose up -d --build

echo "=== Installing Nginx and Certbot ==="
apt-get update
apt-get install -y nginx certbot python3-certbot-nginx

echo "=== Configuring Nginx ==="
cat > /etc/nginx/sites-available/buoc <<EOF
server {
    listen 80;
    server_name ${DOMAIN};

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

ln -sf /etc/nginx/sites-available/buoc /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

echo "=== Requesting SSL Certificate ==="
certbot --nginx -d ${DOMAIN} --non-interactive --agree-tos --register-unsafely-without-email

echo "=== Deployment successful! ==="
