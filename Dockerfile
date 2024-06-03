# Stage 1: Build the React application
FROM node:18-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with a Node.js server
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/dist ./dist

# Install a simple HTTP server
RUN npm install -g serve

# Expose port 3000 to be able to access the app
EXPOSE 3000

# Command to run the server
CMD ["serve", "-s", "dist", "-l", "3000"]
