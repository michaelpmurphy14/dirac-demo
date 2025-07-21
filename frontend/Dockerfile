FROM node:18

WORKDIR /app

# Copy only manifest first for dependency caching
COPY package.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./

RUN npm install vite@5 --save-dev

# Now copy everything else
COPY . .

# Install remaining dependencies inside container
RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]
