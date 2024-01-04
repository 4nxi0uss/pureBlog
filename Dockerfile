FROM php:8.2-fpm

WORKDIR /var/www/html/

COPY ./server /var/www/html/

RUN apt-get update \
    && yes | apt-get upgrade \
    && docker-php-ext-install mysqli pdo pdo_mysql \
    && yes | apt install vim -y
