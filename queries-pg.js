
/**
 * https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/
 * 
 * 
 * https://imasters.com.br/apis-microsservicos/api-gateway-em-arquitetura-de-microservices-com-node-js
 * 
 * https://medium.com/caquicoders/criando-um-simples-api-gateway-com-nodejs-e-express-2ec5369e975d
 * 
 */
const Pool = require('pg').Pool
const httpStatusCode = require('./http-status-code.js')

const pool = new Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432
})

const getUsers = (request, response) => {
    console.log('Finding all users - start')
    pool.query('select * from TABELA  order by NAME_COLUMN', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
        console.log('Finding all users - finish')
    })
}

const getReunions = (request, response) => {
    console.log('Finding all reunions - start')
    pool.query('select * from reuniao  order by dat_realizacao', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
        console.log('Finding all reunions - finish')
    })
}

module.exports = {
    getUsers,
    getReunions
}