FROM node:8.9.4-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm vue-cli

RUN apk add git nano
