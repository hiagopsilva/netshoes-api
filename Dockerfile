FROM node:20.9.0

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g npm@10.8.1

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "start"]