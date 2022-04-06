FROM node:16

WORKDIR /app

ENV PAth /app/node_modules/.bin:PATH

COPY package*.json ./

RUN npm install -g npm@latest --silent
RUN npm install react-scripts

COPY . .

CMD ["npm", "start"]
