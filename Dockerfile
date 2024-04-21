FROM node:14-alpine

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 4000

ENV NAME 4176-Samarakoon

CMD [ "npm", "start" ]