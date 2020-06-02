FROM node:lts-alpine


RUN mkdir -p /usr/src/webapi

WORKDIR /usr/src/webapi

COPY package.*json .

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn","server"]



