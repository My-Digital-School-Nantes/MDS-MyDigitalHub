
# MyDigitalHub

Bienvenue sur le dépôt GitHub du projet MyDigitalHub, une application développée dans le cadre du cours de Progressive Web Apps (PWA) à MyDigitalSchool Nantes.
Cette application est conçue pour mettre en avant les projets réalisés par les étudiants de MyDigitalSchool Nantes, ainsi que pour offrir d'autres fonctionnalités intéressantes pour la communauté étudiante.

## Description

MyDigitalHub est une plateforme dédiée aux étudiants de MyDigitalSchool Nantes. Elle permet de présenter les projets des étudiants, partager des ressources, et bien plus encore.

## Prérequis

Avant de lancer l'application, assurez-vous d'avoir installé les outils suivants :
- Docker
- Node.js
- Yarn

## Installation et lancement du Backend

Pour lancer le backend de l'application, suivez ces étapes :

1. Clonez le dépôt :
   ```bash
   git clone git@github.com:My-Digital-School-Nantes/MDS-MyDigitalHub.git
   cd MDS-MyDigitalHub
   ```

2. Créez et lancez les conteneurs Docker nécessaires :
   ```bash
   docker-compose up -d --no-cache
   ```

## Installation et lancement du Frontend

Pour installer et démarrer le frontend de l'application :

1. Installez les dépendances :
   ```bash
   cd frontend
   yarn install
   ```

2. Lancez le serveur de développement :
   ```bash
   yarn dev
   ```

Vous pouvez maintenant accéder à l'application en ouvrant votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

## Contribution

Nous encourageons la contribution à ce projet ! Si vous avez des suggestions ou des améliorations, n'hésitez pas à faire un fork du dépôt et à soumettre une pull request.

## Licence

Ce projet est sous licence libre. Vous pouvez le redistribuer et/ou le modifier sous les termes de la Licence Publique Générale GNU publiée par la Free Software Foundation.
