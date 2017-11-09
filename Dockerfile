FROM node:argon

RUN npm install -g nodemon

EXPOSE 3000

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install dependencies
COPY package.json /app
RUN npm install

# Copy source
COPY . /app

CMD nodemon server/app.js
