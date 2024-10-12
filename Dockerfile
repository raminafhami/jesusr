FROM registry.menobuzz.com/node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 8080
CMD [ "node", "./bin/www" ]
