#reactの静的ファイル作成
FROM node:20.14.0
WORKDIR /code
COPY ./package*.json ./
RUN npm install
COPY . ./
RUN npm run build