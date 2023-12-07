# FROM biarms/mysql
# no offical mysql for arm, so found this one
#FROM ibex/debian-mysql-server-5.7
# FROM clover/mysql
FROM mysql:5.7
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes
COPY my.cnf /etc/mysql/

# tried to create admin account during container creation
# dosn't work, mysql not started yet
#RUN mysql -h 127.0.0.1 -u root -e "CREATE USER 'test'@'localhost' IDENTIFIED BY 'test'; GRANT ALL PRIVILEGES ON *.* TO 'test'@'localhost' WITH GRANT OPTION; CREATE USER 'test'@'%' IDENTIFIED BY 'test'; GRANT ALL PRIVILEGES ON *.* TO 'test'@'%' WITH GRANT OPTION; FLUSH PRIVILEGES;"

# create admin account
# phpmyadmin container connection doesn't work with default root privileges
# this works from cmd line after container started
# first 'mysql' is container name, second 'mysql' is command to run
#docker exec -it mysql mysql -uroot -p -e "CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin'; GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION; CREATE USER 'admin'@'%' IDENTIFIED BY 'admin'; GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' WITH GRANT OPTION; FLUSH PRIVILEGES;"
