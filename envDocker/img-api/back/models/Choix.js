const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Choix', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    section_depart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Section',
        key: 'id'
      }
    },
    section_arrivee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Section',
        key: 'id'
      }
    },
    texte: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Choix',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Choix_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
