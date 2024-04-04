const sequelize= require('../database/database')
const initModels= require('../models/init-models')
const Utilisateur = require('../models/Utilisateur');
const Personnage = require('../models/Personnage');
const bcrypt = require('bcryptjs');

let models= initModels(sequelize)

exports.personnages = async (req, res) => {
    const { id } = req.params; // L'ID de l'utilisateur
  
    try {
      // Trouver l'utilisateur par ID pour vérifier qu'il existe
      const utilisateur = await models.Utilisateur.findByPk(id);
  
      if (!utilisateur) {
        return res.status(404).send('User not found');
      }
  
      // Trouver tous les personnages associés à cet utilisateur
      const characters = await models.Personnage.findAll({
        where: { id_utilisateur: id }
      });
  
      res.json(characters);
    } catch (error) {
      console.error('Error retrieving characters', error);
      res.status(500).send('Server Error');
    }
  }
  
  exports.inscription = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Hasher le mot de passe avant de le stocker
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Créer un nouvel utilisateur avec l'email et le mot de passe hashé
      const newUtilisateur = await models.Utilisateur.create({
        email,
        mot_de_passe: hashedPassword
      });
  
      // Répondre avec succès (ne renvoyez pas le mot de passe hashé dans la réponse)
      res.status(201).json({ message: 'User created successfully', userId: Utilisateur.id });
    } catch (error) {
      console.error('Error creating new user', error);
      res.status(500).send('Error creating new user');
    }
  }
  
  exports.connexion = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Trouver l'utilisateur par email
      const utilisateur = await models.Utilisateur.findOne({ where: { email } });
  
      if (!utilisateur) {
        return res.status(404).send('User not found');
      }
      console.log('Mot de passe (clair):', password);
      console.log('Hash du mot de passe (depuis la base de données):', utilisateur.mot_de_passe);
      // Comparer le mot de passe fourni avec le mot de passe hashé stocké
      const isMatch = await bcrypt.compare(password, utilisateur.mot_de_passe);
      
      if (!isMatch) {
        return res.status(400).send('Invalid credentials');
      }
  
      // Répondre avec succès si les mots de passe correspondent
      res.json({ message: 'Connexion réussie', userId: utilisateur.id });
    } catch (error) {
      console.error('Error during authentication', error);
      res.status(500).send('Server Error');
    }
  };
  