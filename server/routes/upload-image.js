const express = require('express')

const router = express.Router()

//Postgres connection
const client = require('../db/client').client

//Endpoints


//Export
module.exports = router