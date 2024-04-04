const express = require('express');
const PORT=3100
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173' // Autorise les requêtes de votre app React
}));

app.use(bodyParser.json())

//Routes
const routeTest = require('./routers/routeTest.js')
const routeUtilisateur = require('./routers/routeUtilisateur.js')
const routeSection = require('./routers/routeSection.js')
const routeCombat = require('./routers/routeCombat.js')
const routePersonnage = require('./routers/routePersonnage.js')
const routeObjet = require('./routers/routeObjet.js')
const routeObjetPersonnage = require('./routers/routeObjetPersonnage.js')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  

app.use('/api/utilisateur', routeUtilisateur)
app.use('/api/test', routeTest)
app.use('/api/section', routeSection)
app.use('/api/combat', routeCombat)
app.use('/api/personnage', routePersonnage)
app.use('/api/objet', routeObjet)
app.use('/api/objetPersonnage', routeObjetPersonnage)

app.listen(PORT)
console.log("Serveur Web prêt...")