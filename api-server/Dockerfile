FROM node:18
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
COPY .env ./
RUN npm i
RUN npm uninstall bcrypt
RUN npm install bcrypt
EXPOSE 6234
#CMD ["ls","-la"]

CMD ["npm", "run", "start"] 