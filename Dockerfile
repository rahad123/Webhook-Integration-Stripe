FROM node:14.20.1-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
RUN npm install pm2 -g
COPY . .
EXPOSE 3000
CMD ["pm2-runtime",  "src/server.js","--exp-backoff-restart-delay=100", "--time"]
