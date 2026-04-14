# ==========================================
# STAGE 1: The Builder
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies needed for building)
RUN npm install

# Copy the rest of the source code
COPY . .

# If you have a build script (TypeScript, Next.js, etc.), run it here.
# If you are just using plain Express/Node.js, you can remove this line.
RUN npm run build 

# ==========================================
# STAGE 2: The Production Runner
# ==========================================
FROM node:20-alpine

# Set node environment to production
ENV NODE_ENV=production

WORKDIR /app

# Copy package files again
COPY package*.json ./

# Install ONLY production dependencies (ignores devDependencies)
RUN npm install --omit=dev

# Copy ONLY the compiled code/assets from the builder stage.
# Note: Change '/app/dist' to match your output folder (e.g., '/app/build' or just '/app' if no build step)
# COPY --from=builder /app/dist ./dist

COPY --from=builder /app/src ./src
COPY --from=builder /app/server.js ./

# If you don't have a build step (plain JS), use this instead of the line above:
# COPY --from=builder /app/src ./src

EXPOSE 3000

# Start the application
CMD ["npm", "start"]
