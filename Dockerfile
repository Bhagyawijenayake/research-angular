# Stage 1: Build Angular app
FROM node:20-alpine as builder

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Angular app
RUN npm run build 

# Stage 2: Serve Angular app using Nginx
FROM nginx:1.25-alpine

# Copy the built Angular app from the previous stage
COPY --from=builder /app/dist/research-angular /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
