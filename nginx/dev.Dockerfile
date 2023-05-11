FROM nginx:1.23.3-alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/nginx.dev.conf /etc/nginx/conf.d/

EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]