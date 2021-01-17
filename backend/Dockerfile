FROM node:12

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5500

CMD [ "node", "index.js" ]



