FROM node:bullseye
WORKDIR /usr/src/app
EXPOSE 3000
# Install nodemon globally
RUN npm install -g nodemon
COPY package.json ./
RUN npm install 
# COPY . .
# RUN npm init -y && npm install express body-parser cookie-parser multer --save
# ENTRYPOINT ["node", "./server.js"]
# CMD ["npm","start"]
# CMD ["nodemon", "server.js"]
CMD ["nodemon", "--ext", "js,html", "server.js"]
