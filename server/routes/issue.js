const express = require('express')
const { Client } = require('pg')

const router = express.Router()

//Postgres connection
const client = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE
})

client.connect().then(val => {
    console.log("Svaka cast")
}).catch(error => {
    console.log("Error", error)
})


//Endpoints


//Export
module.exports = router