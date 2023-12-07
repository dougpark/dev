# FROM php:7.3-rc-fpm-alpine
# must use fpm version since in its own container, can't embed into apache
FROM php:7.4-fpm
#FROM xddxdd/php7-fpm:arm32v7 -- didn't work
# RUN apk update; \
#     apk upgrade;

# RUN docker-php-ext-install mysqli
RUN docker-php-ext-install pdo_mysql

#RUN docker-php-ext-install pdo_sqlite
# RUN apk add freetype libpng libjpeg-turbo freetype-dev libpng-dev libjpeg-turbo-dev
# RUN docker-php-ext-install -j$(nproc) iconv 
# RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ 
# RUN docker-php-ext-install -j$(nproc) gd

COPY php.ini /usr/local/etc/php/php.ini
#COPY php.ini /etc/php/7.4/fpm/php-fpm.conf
