const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const dbPg = require('./queries-pg.js')
const dbSGt = require('./db-sgt')


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended : true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, Oracle and Postgres API' })
})
/**
 * 
 app.get('/allUsers', (request, response) => {
     dbPg.getUsers
    })
    */

app.get('/users', dbPg.getUsers)
app.get('/reunions', dbPg.getReunions)
app.get('/medicoes', dbSGt.getMedicoes)

app.listen(port, () => {
    console.log(`Microservice running on port ${port}.`)
  })
