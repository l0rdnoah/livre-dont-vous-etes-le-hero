const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Utilisateur', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mot_de_passe: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Utilisateur',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Utilisateur_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
