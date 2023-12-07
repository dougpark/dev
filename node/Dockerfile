FROM node:buster

RUN npm install express
RUN npm install body-parser
RUN npm install cookie-parser
RUN npm install mysql
# set timezone of the container to central standard time
RUN rm /etc/localtime && ln -s /usr/share/zoneinfo/CST6CDT /etc/localtime

# RUN npm install pm2 -g
# RUN apk update; \
#     apk upgrade;
#COPY ./apache.conf /usr/local/apache2/conf/httpd.conf
WORKDIR /usr/src/app
EXPOSE 3000
# EXPOSE 443

ENTRYPOINT ["node", "./node_mysql.js"]

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
