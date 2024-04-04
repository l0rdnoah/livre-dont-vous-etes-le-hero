# Fonctionnement de l'environnement

## Image pour l'api
- Copier le fichier back présent à la racine 

Votre arboresence doit ressembler à ça 
```
img-api
      - back
      - dockerfile
```

Ensuite mettez vous dans le répertoire **img-api** et entrer la commande suivante ```docker build -t api .``` et pour sauvegarder l'image ```docker save -o api.tar api:latest```

## Image pour le serveur nginx 

Votre arboresence doit ressembler à ça 
```
img-nginx-custom
      - prod
      - dockerfile
```
Le dossier ```prod``` doit contenir tous les fichiers de l'application. 

Ensuite mettez vous dans le répertoire **img-nginx-custom** et entrer la commande suivante ```docker build -t nginx-custom .``` et pour sauvegarder l'image ```docker save -o nginx-custom.tar nginx-custom:latest```

## Image pour la base de données
Votre arboresence doit ressembler à ça 
```
img-postgre-custom
      - script.sql
      - dockerfile
```