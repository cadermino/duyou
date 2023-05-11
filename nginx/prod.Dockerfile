FROM nginx:1.23.3-alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/nginx.prod.conf /etc/nginx/conf.d/

COPY duyou_com_mx_chain.crt /etc/ssl/private/
COPY private_duyou.key /etc/ssl/private/

EXPOSE 80
EXPOSE 443

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]