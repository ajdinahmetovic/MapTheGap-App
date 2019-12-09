const database_config = require('../config/database_config')
const { Client } = require('pg')

const client = new Client(database_config)

function connect() {
    client.connect().then(() => {console.log("Database connected")})
}
module.exports = {
    client: client,
    connect: connect
}
