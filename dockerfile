# Utilisez une image de base
FROM node:18.16.0

# Définissez les métadonnées de l'image
LABEL version="1.0" maintainer="Lord Noah"

# Installez pm2 globalement
RUN npm install -g pm2

# Définissez le répertoire de travail
WORKDIR /back

# Copiez les fichiers de l'API dans le conteneur
COPY ./back .

# Installez les dépendances
RUN npm install --force

# Commande pour démarrer l'API avec pm2
CMD ["pm2-runtime", "npm", "--", "run", "dev"]

# Exposez le port sur lequel l'application s'exécute
EXPOSE 3000
