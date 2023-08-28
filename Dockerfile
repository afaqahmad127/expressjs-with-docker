FROM alpine:3.17

ENV NODE_VERSION 18.17.1

WORKDIR .

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]