const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Section', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    texte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type_choix: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    objet_recup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Objet',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Section',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Section_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
