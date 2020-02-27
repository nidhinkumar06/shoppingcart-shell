FROM metamagicglobal/apache:jdk8

#RUN rm -rf /etc/apache2/apache2.conf

RUN chmod -R 777 /var/www/html/
RUN mkdir /var/www/html/shoppingportalshell/
ADD dist/shoppingportalshell/ /var/www/html/shoppingportalshell/
RUN chmod -R 777 /var/www/html/shoppingportalshell/*

EXPOSE 80
