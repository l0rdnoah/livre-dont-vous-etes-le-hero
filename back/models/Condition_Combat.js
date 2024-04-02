const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Condition_Combat', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    combat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Combat',
        key: 'id'
      }
    },
    min_des: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_des: {
      type: DataTypes.INTEGER,
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
    modif_degat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    degats: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    texte: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Condition_Combat',
    schema: 'public',
    timestamps: false
  });
};
