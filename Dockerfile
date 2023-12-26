# ---- Build Node Stage ----
FROM node:16 AS build-node

#  Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all other files
COPY . .




# Expose port (80 is typical for web applications)
EXPOSE 80


CMD ["npm", "start"]
