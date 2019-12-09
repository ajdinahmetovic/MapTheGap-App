const database_config = require('../config/database_config')

const migrator = require('postgres-migrations')
const path = require('path')
const { Client } = require('pg')

module.exports = () => {
    migrator.createDb(process.env.POSTGRES_DATABASE, database_config)
        .then(() => {
            require('./client').connect()
            return migrator.migrate(database_config, path.resolve(__dirname, 'migrations'))
        })
        .then(() => {
            console.log("Migrations successful")
        })
        .catch(error => {
            console.log("error", error)
        })
}
