FROM node:18
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i

EXPOSE 6234

CMD ["npm", "run", "start"] 