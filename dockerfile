# Etape 1 : Construction de l'application frontend avec Node.js
FROM node:22 AS build-stage

COPY ./front .

# Nettoyer le cache npm avant d'installer les dépendances
RUN npm cache clean --force && npm install --force

# Construire l'application frontend
RUN npm run build

# Etape 2 : Utiliser une image Nginx pour servir l'application
FROM nginx:latest

# Définissez les métadonnées de l'image
LABEL version="1.0" maintainer="Lord Noah"

# Copier les fichiers construits depuis l'étape de build
COPY --from=build-stage dist /usr/share/nginx/html

# Copier des fichiers statiques supplémentaires
RUN mkdir /usr/share/nginx/html/img
COPY envDocker/img-nginx-custom/prod/img /usr/share/nginx/html/img

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]