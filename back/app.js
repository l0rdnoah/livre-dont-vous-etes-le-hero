const express = require('express');
const PORT=3000
const app = express()
const bodyParser = require('body-parser')

//Routes
const routeTest = require('./routers/routeTest.js')
const routeSection = require('./routers/routeSection.js')

//

app.use('/api/test', routeTest)
app.use('/api/section', routeSection)



app.use(bodyParser.json())
app.listen(PORT)
console.log("Serveur Web prêt...")