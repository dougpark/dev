FROM node:bullseye

ENV APP /app
RUN mkdir /app
WORKDIR /app
EXPOSE 3000

RUN npm init -y
RUN npm install express body-parser cookie-parser multer socket.io -g --save
# RUN npm install body-parser --save
# RUN npm install cookie-parser --save
# RUN npm install multer --save
# RUN npm install mysql
# RUN npm install socket.io --save
# RUN npm install -g nodemon



# CMD ["node", "index.js"]

# set timezone of the container to central standard time
# RUN rm /etc/localtime && ln -s /usr/share/zoneinfo/CST6CDT /etc/localtime

# RUN npm install pm2 -g
# RUN apk update; \
#     apk upgrade;
#COPY ./apache.conf /usr/local/apache2/conf/httpd.conf


# EXPOSE 443

# ENTRYPOINT ["node", "./index.js"]

# quickly restart node container
# docker restart node -t0

# ln -s /usr/share/zoneinfo/CST6CDT localtime

# pm2 is a process manager so that can easily start and stop node inside a container
# without having to start and stop the entire container
# ENTRYPOINT ["pm2-runtime", "./index.js"]

# enter the container from the host
# docker exec -it node /bin/bash - to open a shell inside the ndoe container

# pm2 usage
# inside container:
# pm 2 ls               - to list all running processes
# pm2 restart <name>    - to restart a process. Ex. pm2 restart index - to restart index.js example
