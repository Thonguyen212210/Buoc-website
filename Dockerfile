FROM node:22.5-alpine

WORKDIR /app

# Copy server package.json and install dependencies
COPY server/package.json server/package-lock.json* ./server/
RUN cd server && npm install --omit=dev

# Copy the rest of the application
COPY server/ ./server/
COPY website/ ./website/

WORKDIR /app/server

# Expose the port
EXPOSE 3000

# Set environment variables
ENV PORT=3000
ENV STATIC_DIR=/app/website
ENV DATA_DIR=/app/server/data

CMD ["node", "--experimental-sqlite", "--no-warnings", "server.js"]
