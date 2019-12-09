require('dotenv').config();

const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Database
const database_config = require('./config/database_config')
require('./db/init_db')()


//Middleware
const checkUserAccessToken = (req, res, next) => {
    //Skip for login and register

    if (req.url == '/user/register' || req.url == '/user/login') {
        next()
        return
    }
    //Get token from header
    const token = (req.headers.authorization ? req.headers.authorization.substring(req.headers.authorization.indexOf(' ') + 1) : "")

    //Verify token
    jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
        if (error) {
            //Bad token
            res.status(401).send({
                success: false,
                request_id: Math.random().toString(36).substring(3),

                data: {},
                error: {
                    message: "Unauthorized user"
                }
            })
        } else {
            //Token verified
            req.userId = decoded.id

            next()
            return
        }
    })
}

//Add middleware
app.use(checkUserAccessToken)


//Import routes
const userRoutes = require('./routes/user')
const issueRoutes =  require('./routes/issue')

//Routes
app.use('/user', userRoutes)
app.use('/issue', issueRoutes)


//Listen port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})