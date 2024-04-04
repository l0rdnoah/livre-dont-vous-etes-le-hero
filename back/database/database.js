const Sequelize = require('sequelize');

// Initialise Sequelize avec les informations de connexion à la base de données
const sequelize = new Sequelize('LordOfDarkness', 'lorenzo', 'nefaissurtoutpasca', {
  host: 'localhost',
  dialect: 'postgres', // Le dialecte dépend du type de base de données que vous utilisez (mysql, postgres, sqlite, etc.)
  // autres options de configuration peuvent être ajoutées ici
});

// Test de la connexion à la base de données
sequelize
  .authenticate()
  .then(() => {
    console.log('Connexion à la base de données établie avec succès.');
  })
  .catch(err => {
    console.error('Impossible de se connecter à la base de données:', err);
  });

// Exportez l'objet sequelize pour pouvoir l'utiliser dans d'autres parties de votre application
module.exports = sequelize;
