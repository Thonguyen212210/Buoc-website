#!/usr/bin/expect -f
set timeout -1
spawn ssh -o StrictHostKeyChecking=no root@66.154.110.53 "certbot --nginx -d buoc.site --non-interactive --agree-tos --register-unsafely-without-email"
expect "assword:"
send "u2W77u6k53\r"
expect eof
