FROM node as builder

WORKDIR /usr/src/app

RUN npm install .

CMD $(npm bin)/ng serve --host 0.0.0.0 --proxy-config proxy.conf.json
