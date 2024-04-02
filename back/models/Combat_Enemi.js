const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Combat_Enemi', {
    id_combat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Combat',
        key: 'id'
      }
    },
    id_enemi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Enemi',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Combat_Enemi',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Combat_Enemi_pkey",
        unique: true,
        fields: [
          { name: "id_combat" },
          { name: "id_enemi" },
        ]
      },
    ]
  });
};
