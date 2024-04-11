FROM node:18-alpine3.18
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

# Environnment variables
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ARG DATABASE_CLIENT
ENV DATABASE_CLIENT=${DATABASE_CLIENT}
ARG DATABASE_PORT
ENV DATABASE_PORT=${DATABASE_PORT}
ARG DATABASE_NAME
ENV DATABASE_NAME=${DATABASE_NAME}
ARG DATABASE_USERNAME
ENV DATABASE_USERNAME=${DATABASE_USERNAME}
ARG DATABASE_PASSWORD
ENV DATABASE_PASSWORD=${DATABASE_PASSWORD}
ARG APP_KEYS
ENV APP_KEYS=${APP_KEYS}
ARG API_TOKEN_SALT
ENV API_TOKEN_SALT=${API_TOKEN_SALT}
ARG ADMIN_JWT_SECRET
ENV ADMIN_JWT_SECRET=${ADMIN_JWT_SECRET}
ARG TRANSFER_TOKEN_SALT
ENV TRANSFER_TOKEN_SALT=${TRANSFER_TOKEN_SALT}
ARG JWT_SECRET
ENV JWT_SECRET=${JWT_SECRET}

WORKDIR /opt/
COPY package.json yarn.lock ./
RUN yarn global add node-gyp
RUN yarn config set network-timeout 600000 -g && yarn install
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node
RUN ["yarn", "build"]
EXPOSE 1337
CMD ["yarn", "develop"]