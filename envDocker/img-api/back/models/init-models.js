var DataTypes = require("sequelize").DataTypes;
var _Choix = require("./Choix");
var _Combat = require("./Combat");
var _Combat_Enemi = require("./Combat_Enemi");
var _Condition_Choix = require("./Condition_Choix");
var _Condition_Combat = require("./Condition_Combat");
var _Enemi = require("./Enemi");
var _Enigme = require("./Enigme");
var _Objet = require("./Objet");
var _Objet_Personnage = require("./Objet_Personnage");
var _Personnage = require("./Personnage");
var _Section = require("./Section");
var _Utilisateur = require("./Utilisateur");

function initModels(sequelize) {
  var Choix = _Choix(sequelize, DataTypes);
  var Combat = _Combat(sequelize, DataTypes);
  var Combat_Enemi = _Combat_Enemi(sequelize, DataTypes);
  var Condition_Choix = _Condition_Choix(sequelize, DataTypes);
  var Condition_Combat = _Condition_Combat(sequelize, DataTypes);
  var Enemi = _Enemi(sequelize, DataTypes);
  var Enigme = _Enigme(sequelize, DataTypes);
  var Objet = _Objet(sequelize, DataTypes);
  var Objet_Personnage = _Objet_Personnage(sequelize, DataTypes);
  var Personnage = _Personnage(sequelize, DataTypes);
  var Section = _Section(sequelize, DataTypes);
  var Utilisateur = _Utilisateur(sequelize, DataTypes);

  Combat.belongsToMany(Enemi, { as: 'id_enemi_Enemis', through: Combat_Enemi, foreignKey: "id_combat", otherKey: "id_enemi" });
  Enemi.belongsToMany(Combat, { as: 'id_combat_Combats', through: Combat_Enemi, foreignKey: "id_enemi", otherKey: "id_combat" });
  Condition_Choix.belongsTo(Choix, { as: "id_choix_Choix", foreignKey: "id_choix"});
  Choix.hasMany(Condition_Choix, { as: "Condition_Choixes", foreignKey: "id_choix"});
  Combat_Enemi.belongsTo(Combat, { as: "id_combat_Combat", foreignKey: "id_combat"});
  Combat.hasMany(Combat_Enemi, { as: "Combat_Enemis", foreignKey: "id_combat"});
  Condition_Combat.belongsTo(Combat, { as: "combat_Combat", foreignKey: "combat"});
  Combat.hasMany(Condition_Combat, { as: "Condition_Combats", foreignKey: "combat"});
  Combat_Enemi.belongsTo(Enemi, { as: "id_enemi_Enemi", foreignKey: "id_enemi"});
  Enemi.hasMany(Combat_Enemi, { as: "Combat_Enemis", foreignKey: "id_enemi"});
  Objet_Personnage.belongsTo(Objet, { as: "id_objet_Objet", foreignKey: "id_objet"});
  Objet.hasMany(Objet_Personnage, { as: "Objet_Personnages", foreignKey: "id_objet"});
  Section.belongsTo(Objet, { as: "objet_recup_Objet", foreignKey: "objet_recup"});
  Objet.hasMany(Section, { as: "Sections", foreignKey: "objet_recup"});
  Objet_Personnage.belongsTo(Personnage, { as: "id_personnage_Personnage", foreignKey: "id_personnage"});
  Personnage.hasMany(Objet_Personnage, { as: "Objet_Personnages", foreignKey: "id_personnage"});
  Choix.belongsTo(Section, { as: "section_arrivee_Section", foreignKey: "section_arrivee"});
  Section.hasMany(Choix, { as: "Choixes", foreignKey: "section_arrivee"});
  Choix.belongsTo(Section, { as: "section_depart_Section", foreignKey: "section_depart"});
  Section.hasMany(Choix, { as: "section_depart_Choixes", foreignKey: "section_depart"});
  Combat.belongsTo(Section, { as: "section_depart_Section", foreignKey: "section_depart"});
  Section.hasMany(Combat, { as: "Combats", foreignKey: "section_depart"});
  Enigme.belongsTo(Section, { as: "section_defaite_Section", foreignKey: "section_defaite"});
  Section.hasMany(Enigme, { as: "Enigmes", foreignKey: "section_defaite"});
  Enigme.belongsTo(Section, { as: "section_depart_Section", foreignKey: "section_depart"});
  Section.hasMany(Enigme, { as: "section_depart_Enigmes", foreignKey: "section_depart"});
  Enigme.belongsTo(Section, { as: "section_victoire_Section", foreignKey: "section_victoire"});
  Section.hasMany(Enigme, { as: "section_victoire_Enigmes", foreignKey: "section_victoire"});
  Personnage.belongsTo(Utilisateur, { as: "id_utilisateur_Utilisateur", foreignKey: "id_utilisateur"});
  Utilisateur.hasMany(Personnage, { as: "Personnages", foreignKey: "id_utilisateur"});

  return {
    Choix,
    Combat,
    Combat_Enemi,
    Condition_Choix,
    Condition_Combat,
    Enemi,
    Enigme,
    Objet,
    Objet_Personnage,
    Personnage,
    Section,
    Utilisateur,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
