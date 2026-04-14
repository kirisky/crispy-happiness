# Use an official, lightweight Node.js image as the base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Build the application (if required, e.g., for Next.js or TypeScript)
# RUN npm run build

# Expose the port your app runs on (change 3000 if your app uses a different port)
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
