Prérequis: Node: https://nodejs.org/en ;  Docker-desktop: https://docs.docker.com/desktop/install/windows-install/ ;  Wampserver: https://www.wampserver.com/

Fonctionnement Wampserver :
Lancer Wampserver, ouvrir phpmyadmin (identifiant: root, pas de mot de passe), importer la base de données (la base de données est dans le fichier du backend : BackendTheBradery/db/backendbradery.sql). 
Installation Front-end : `npm install`, `npm run dev`. 
Installation Back-end : Dans le fichier db.js, remplacez "process.env.PASSWORDEXAMPLE" par "process.env.PASSWORDEMPTY", et "process.env.HOSTDB" par "process.env.HOSTLOCAL". Ensuite, exécutez `npm install` et `npm start`.

Fonctionnement Docker :
ajouter: le fichier "dockerCompose" et "env" envoyer en pièce jointe dans le mail à la racine du projet.
Installation Back-end : Dans le fichier db.js, remplacez "process.env.PASSWORDEMPTY" par "process.env.PASSWORDEXAMPLE" et "process.env.HOSTLOCAL" par "process.env.HOSTDB". Ensuite, exécutez `Docker Compose up -d`.

Pages créées :
- SignIn : pour la connexion et l'inscription (non fonctionnelle).
- Products : affiche tous les produits de la base de données et permet d'ajouter des produits dans le panier en cliquant sur "ajouter".
- ProductPayment : le panier affiche la liste des produits sélectionnés et permet d'augmenter la quantité de produits.
- Product : lorsque l'on clique sur un produit de la page "products", on est redirigé vers cette page qui affiche le produit seul mais ne permet pas de le rajouter au panier.

Fonctionnalités :
- Panier : Les utilisateurs doivent pouvoir ajouter des produits à leur panier, en respectant la limite de stock disponible.
- Page de Paiement : Une fois les produits ajoutés, les utilisateurs doivent pouvoir se diriger vers une page de paiement et passer une commande.
- Commandes : Après avoir passé une commande, une entrée doit être créée dans la base de données avec le prix total et chaque article de la commande. Le stock de produits doit également être mis à jour.
J'ai corrigé quelques fautes d'orthographe et clarifié certaines phrases pour une meilleure 
