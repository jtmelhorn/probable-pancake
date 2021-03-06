FROM node:16

WORKDIR /app

ENV PATH /app/node_modules/.bin:${PATH}

COPY package*.json ./

RUN npm install -g npm@latest --silent
RUN npm install react-scripts@latest --silent -g

COPY . .

CMD ["npm", "start"]
