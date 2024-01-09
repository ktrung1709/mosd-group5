FROM node:18 as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY . .
RUN npm run build

# FROM nginx:1.25.1
# COPY --from=build /app/dist /usr/share/nginx/html
# COPY ./default.conf /etc/nginx/conf.d/default.conf


EXPOSE 5173
#CMD ["ls","-la"]

CMD ["npm", "run", "dev","--","--host", "0.0.0.0", "--port", "5173"] 

# CMD ["nginx", "-g", "daemon off;"]