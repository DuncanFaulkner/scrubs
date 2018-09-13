FROM node:latest as node
LABEL author="Duncan Faulkner"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t chameleon-scrubs -f nginx.prod.dockerfile .
# docker run -d -p 8080:80 chameleon-scrubs


# docker run -p 8080:80 -v $(pwd)/dist:/usr/share/nginx/html chameleon-scrubs