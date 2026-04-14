# ==========================================
# STAGE 1: The Builder
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ==========================================
# STAGE 2: The Production Runner
# ==========================================
FROM nginx:alpine

# Set node environment to production
ENV NODE_ENV=production
COPY --from=builder /app/output /usr/share/nginx/html
EXPOSE 80

# Start the application
CMD ["nginx", "-g", "daemon off;"]
