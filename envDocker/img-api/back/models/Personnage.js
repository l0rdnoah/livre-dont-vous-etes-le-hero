const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Personnage', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Utilisateur',
        key: 'id'
      }
    },
    section_actuelle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    habilite: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    endurance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    po: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modif_degats: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    endurance_max: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Personnage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Personnage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
