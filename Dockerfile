FROM node:18

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install && mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . ./

CMD ["npm", "start"]
