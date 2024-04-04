const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Enigme', {
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
    section_victoire: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Section',
        key: 'id'
      }
    },
    section_defaite: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Section',
        key: 'id'
      }
    },
    solution: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Enigme',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Enigme_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
