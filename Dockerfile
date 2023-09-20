# build stage
#FROM node:16.14.2-alpine as build-stage
#WORKDIR /app/
#COPY frontend/package.json /app/
#RUN npm cache verify
#RUN npm install
#COPY frontend /app/
#RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage
COPY /prod.conf /etc/nginx/nginx.conf
#COPY backend/static /usr/src/app/static/
#COPY dist/static /usr/src/app/static/
#COPY --from=build-stage /app/dist /dist/
COPY dist/ /dist/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
