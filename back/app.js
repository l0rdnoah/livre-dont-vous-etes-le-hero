const express = require('express');
const PORT=3000
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

//

app.use('/api', routeTest)
app.use('/api', routeUtilisateur)

app.listen(PORT)
console.log("Serveur Web prêt...")