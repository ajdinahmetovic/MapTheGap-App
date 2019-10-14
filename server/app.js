const express = require('express')
const cors = require('cors')

require('dotenv').config();
const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const userRoutes = require('./routes/user')

//Routes
app.use('/user', userRoutes)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})