FROM node:lts-alpine

WORKDIR /usr/src/web

COPY package.*json .

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

CMD [ "npm","start" ]