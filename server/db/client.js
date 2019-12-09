const database_config = require('../config/database_config')
const { Client } = require('pg')

const client = new Client(database_config)
/*
function connect_db() {
    var isConnected = false
    while (!isConnected) {
        
    }
    
}*/
function connect() {
    client.connect()
}
module.exports = {client: client,
    connect: connect
}
