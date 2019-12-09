FROM node:10 as builder
COPY package*.json ./
RUN npm install
RUN npm install node-sass
COPY . .
EXPOSE 3000
CMD ["npm", "start"]