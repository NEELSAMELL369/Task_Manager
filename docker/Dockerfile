# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY ../package*.json ./

# Install dependencies
RUN npm install --production

# Copy app code
COPY ../app ./app

WORKDIR /usr/src/app/app

EXPOSE 3000

# Start clustered app
CMD ["node", "cluster.js"]
