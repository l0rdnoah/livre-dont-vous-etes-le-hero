# Utilisez une image de base
FROM node:18.16.0

# Définissez les métadonnées de l'image
LABEL version="1.0" maintainer="Lord Noah"

# Définissez le répertoire de travail
WORKDIR /back

# Copiez les fichiers de l'API dans le conteneur
COPY ./back .

# Installez les dépendances
RUN npm install --force

# Commande pour démarrer l'API
CMD ["npm", "run", "dev"]

EXPOSE 3000