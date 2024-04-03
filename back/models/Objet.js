const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Objet', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modif_habilite: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modif_endurance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modif_des: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modif_degats: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prix: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modif_piece: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Objet',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Objet_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
