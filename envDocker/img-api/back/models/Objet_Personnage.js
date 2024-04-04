const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Objet_Personnage', {
    id_personnage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Personnage',
        key: 'id'
      }
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_objet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Objet',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Objet_Personnage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Objet_Personnage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
