FROM nginx:1.18.0-alpine

RUN rm -f /etc/nginx/conf.d/default.conf

COPY gigs.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]