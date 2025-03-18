ARG NODE_VERSION=20.17.0

###################################### BASE IMAGE
FROM node:${NODE_VERSION}-alpine AS base-image
RUN apk add curl
WORKDIR /app
COPY package*.json ./
RUN npm install 
EXPOSE 3000

###################################### BUILDER
FROM base-image AS builder
WORKDIR /app
COPY . .
RUN rm -rf /app/app/style*
RUN npm run build

###################################### DEV CONTAINER
FROM base-image AS dev
ENV NODE_ENV=development
RUN npm install 
COPY . .
CMD npm run dev

###################################### PROD CONTAINER
FROM base-image AS prod
WORKDIR /app

ENV NODE_ENV=production
RUN npm ci

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD npm start
