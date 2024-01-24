
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf node_modules
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run" , "start:dev"]
