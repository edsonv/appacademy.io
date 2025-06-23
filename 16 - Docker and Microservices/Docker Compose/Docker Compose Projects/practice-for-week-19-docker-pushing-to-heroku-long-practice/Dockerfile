FROM node:14.21.3-alpine

WORKDIR /backend
COPY ./wait-for .
COPY backend/ .
RUN chmod +x wait-for && chmod +x bin/www
COPY /frontend/build/ ./public
ENV NODE_ENV=production
ENV JWT=SECRET=aaa967f1-2b08-4dde-a086-5df6bc8eff91
ENV JWT_EXPIRES=604800

CMD [ "npm", "start" ]