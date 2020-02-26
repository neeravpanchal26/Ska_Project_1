# Angular setup
FROM ubuntu:latest

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN apt-get update

RUN apt-get -y install curl gnupg

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -

RUN apt-get install -y nodejs

RUN npm install
