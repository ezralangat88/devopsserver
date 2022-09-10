FROM node:16

WORKDIR /devopsBackend
COPY package.json .dox
RUN npm install
COPY . .
CMD ["npm", "start"]