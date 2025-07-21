FROM node:18

# Set working directory
WORKDIR /app

# Copy files and install serve
COPY . /app/
RUN npm install -g serve

# Expose static files from index.html
CMD ["serve", ".", "-l", "3000"]