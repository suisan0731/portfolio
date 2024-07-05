#reactの静的ファイル作成
FROM node:20.14.0
WORKDIR /code
COPY ./react/package*.json ./
RUN npm install
RUN 
COPY ./react/ ./
RUN npm run build

#nginx
FROM nginx:latest
COPY ./nginx/default.conf /etc/nginx/conf.d