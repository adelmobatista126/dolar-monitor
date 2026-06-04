FROM node:18-alpine

WORKDIR /app

# Copy package files from root (since backend is in a subdirectory)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy backend code
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
