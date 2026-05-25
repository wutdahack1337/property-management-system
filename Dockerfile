# download node.js 20
FROM node:20-alpine 

# all commands will run int /app dir in container
WORKDIR /app 

COPY package*.json ./

# install the dependencies
RUN apk add --no-cache python3 make g++
RUN npm ci
RUN apk del python3 make g++

COPY . .

# document that app will run at port 1337
EXPOSE 1337 

# run this command when start
CMD ["node", "index.js"]