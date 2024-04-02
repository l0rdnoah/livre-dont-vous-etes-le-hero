const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Condition_Choix', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_choix: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Choix',
        key: 'id'
      }
    },
    min_habilite: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_habilite: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    min_endurance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_endurance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    objet_requis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endurance_max: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Condition_Choix',
    schema: 'public',
    timestamps: false
  });
};
