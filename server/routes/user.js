const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
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
router.post('/login', (req, res, next) => {
    
})

router.post('/register', async (req, res, next) => {
    try {
        var resData = null
        switch(req.body.userType) {
            case 'company': case 1:
                resData = await registerCompany(req.body)
                break;
            case 'government': case 2:
                resData = await registerGovernment(req.body)
                break;
            case 'ngo': case 3:
                resData = await registerNGO(req.body)
                break;
            case 'citizen': case 4:
                resData = await registerCitizen(req.body)
                break;
            default:
                throw new Error("Invalid userType")
        }

        res.status(200).json(resData)
} catch (err) {
        console.log(err.message)
        res.status(400).json({code: 400, message: err.message})
    }

})


//Functions
registerCompany = async data => {
    //Undefined Errors
    if (data.name == undefined) throw new Error("'name' is undefined")
    if (data.email == undefined) throw new Error("'email' is undefined")
    if (data.phoneNumber == undefined) throw new Error("'phoneNumber' is undefined")
    if (data.address == undefined) throw new Error("'address' is undefined") 
    if (data.fieldOfAction == undefined) throw new Error("'fieldOfAction' is undefined") 
    if (data.type == undefined) throw new Error("'type' is undefined")
    if (data.password == undefined) throw new Error("'password' is undefined")

    //Lenght Checking
    if (data.name.lenght > 31) throw new Error("'name' needs to be shorter then 31 characters")
    if (data.email.lenght > 31) throw new Error("'email' needs to be shorter then 31 characters")
    if (data.address.lenght > 63) throw new Error("'address' needs to be shorter then 63 characters")
    if (data.type.lenght > 63) throw new Error("'type' needs to be shorter then 63 characters")
    if (data.password.lenght > 31) throw new Error("'password' needs to be shorter then 31 characters and longer then 7 characters")
    data.fieldOfAction.forEach((element, index) => {
        if (element.lenght > 31) throw new Error(`'fieldOfAction[${index}]' needs to be shorter then 31 characters`)
    });
    
    //Validation
    if (!validateEmail(data.email)) throw new Error("'email' is invalid")
    if (!validatePhoneNumber(data.phoneNumber)) throw new Error("'phoneNumber' is invalid")

    //Password Encryption
    data.password = await bcrypt.hash(data.password, 10);

    //Save to database
    sqlData = await client.query(`INSERT INTO Companies(userType, name, email, phoneNumber, address, fieldOfAction, type, password, verified)
        VALUES (${data.userType}, '${data.name}', '${data.email}', '${data.phoneNumber}', '${data.address}', '{${data.fieldOfAction}}', '${data.type}', '${data.password}', false)
        RETURNING *
    `)

    //JWT
    var [access_token, refresh_token] = await Promise.all([
        jwt.sign({id: sqlData.rows[0].id}, process.env.JWT_KEY, {expiresIn: '1h'}),
        jwt.sign({id: sqlData.rows[0].id}, process.env.JWT_KEY, {expiresIn: '30h'})
    ])

    return {
        message: "OK",
        data: {
            access_token: access_token,
            refresh_token: refresh_token,
            user: sqlData.rows[0]
        }
    }
}

registerGovernment = async data => {
    //Undefined Errors
    if (data.name == undefined) throw new Error("'name' is undefined")
    if (data.phoneNumber == undefined) throw new Error("'phoneNumber' is undefined")
    if (data.address == undefined) throw new Error("'address' is undefined") 
    if (data.contactPerson == undefined) throw new Error("'contactPerson' is undefined") 
    if (data.service == undefined) throw new Error("'service' is undefined")
    if (data.password == undefined) throw new Error("'password' is undefined")

    //Lenght Checking
    if (data.name.lenght > 31) throw new Error("'name' needs to be shorter then 31 characters")
    if (data.address.lenght > 63) throw new Error("'address' needs to be shorter then 63 characters")
    if (data.contactPerson.lenght > 31) throw new Error("'contactPerson' needs to be shorter then 63 characters")
    if (data.service.lenght > 63) throw new Error("'service' needs to be shorter then 63 characters")
    if (data.password.lenght > 31) throw new Error("'password' needs to be shorter then 31 characters and longer then 7 characters")

    //Validation
    if (!validatePhoneNumber(data.phoneNumber)) throw new Error("'phoneNumber' is invalid")

    //Password Encryption
    data.password = await bcrypt.hash(data.password, 10);

    //Save to database
    sqlData = await client.query(`INSERT INTO Governments(userType, name, phoneNumber, address, contactPerson, service, password, verified)
        VALUES (${data.userType}, '${data.name}', '${data.phoneNumber}', '${data.address}', '${data.contactPerson}', '${data.service}', '${data.password}', false)
        RETURNING *
    `)

    //JWT
    var [access_token, refresh_token] = await Promise.all([
        jwt.sign({id: sqlData.rows[0].id}, process.env.JWT_KEY, {expiresIn: '1h'}),
        jwt.sign({id: sqlData.rows[0].id}, process.env.JWT_KEY, {expiresIn: '30h'})
    ])

    return {
        message: "OK",
        data: {
            access_token: access_token,
            refresh_token: refresh_token,
            user: sqlData.rows[0]
        }
    }
}

registerNGO = async data => {
    //Undefined Errors
    if (data.name == undefined) throw new Error("'name' is undefined")
    if (data.email == undefined) throw new Error("'email' is undefined")
    if (data.phoneNumber == undefined) throw new Error("'phoneNumber' is undefined")
    if (data.address == undefined) throw new Error("'address' is undefined") 
    if (data.fieldOfAction == undefined) throw new Error("'fieldOfAction' is undefined") 
    if (data.areaOfAction == undefined) throw new Error("'areaOfAction' is undefined")
    if (data.password == undefined) throw new Error("'password' is undefined")

    //Lenght Checking
    if (data.name.lenght > 31) throw new Error("'name' needs to be shorter then 31 characters")
    if (data.email.lenght > 31) throw new Error("'email' needs to be shorter then 31 characters")
    if (data.address.lenght > 63) throw new Error("'address' needs to be shorter then 63 characters")
    if (data.password.lenght > 31) throw new Error("'password' needs to be shorter then 31 characters and longer then 7 characters")
    data.fieldOfAction.forEach((element, index) => {
        if (element.lenght > 31) throw new Error(`'fieldOfAction[${index}]' needs to be shorter then 31 characters`)
    });
    data.areaOfAction.forEach((element, index) => {
        if (element.lenght > 31) throw new Error(`'fieldOfAction[${index}]' needs to be shorter then 31 characters`)
    });

    //Validation
    if (!validateEmail(data.email)) throw new Error("'email' is invalid")
    if (!validatePhoneNumber(data.phoneNumber)) throw new Error("'phoneNumber' is invalid")

    //Password Encryption
    data.password = await bcrypt.hash(data.password, 10);

    //Save to database
    sqlData = await client.query(`INSERT INTO NGOs(userType, name, email, phoneNumber, address, fieldOfAction, areaOfAction, password, verified)
        VALUES (${data.userType}, '${data.name}', '${data.email}', '${data.phoneNumber}', '${data.address}', '{${data.fieldOfAction}}', '{${data.areaOfAction}}', '${data.password}', false)
        RETURNING *
    `)

    //JWT
    var [access_token, refresh_token] = await Promise.all([
        jwt.sign({id: sqlData.rows[0].id}, process.env.JWT_KEY, {expiresIn: '1h'}),
        jwt.sign({id: sqlData.rows[0].id}, process.env.JWT_KEY, {expiresIn: '30h'})
    ])

    return {
        message: "OK",
        data: {
            access_token: access_token,
            refresh_token: refresh_token,
            user: sqlData.rows[0]
        }
    }
}

registerCitizen = async data => {
    //Undefined Errors
    if (data.name == undefined) throw new Error("'name' is undefined")
    if (data.email == undefined) throw new Error("'email' is undefined")
    if (data.phoneNumber == undefined) throw new Error("'phoneNumber' is undefined")
    if (data.address == undefined) throw new Error("'address' is undefined") 
    if (data.dateOfBirth == undefined) throw new Error("'dateOfBirth' is undefined") 
    if (data.password == undefined) throw new Error("'password' is undefined")

    //Lenght Checking
    if (data.name.lenght > 31) throw new Error("'name' needs to be shorter then 31 characters")
    if (data.email.lenght > 31) throw new Error("'email' needs to be shorter then 31 characters")
    if (data.address.lenght > 63) throw new Error("'address' needs to be shorter then 63 characters")
    if (data.password.lenght > 31) throw new Error("'password' needs to be shorter then 31 characters and longer then 7 characters")

    //Validation
    if (!validateEmail(data.email)) throw new Error("'email' is invalid")
    if (!validatePhoneNumber(data.phoneNumber)) throw new Error("'phoneNumber' is invalid")
    if (!validateDate(data.dateOfBirth)) throw new Error("'dateOfBirth' is invalid")

    //Password Encryption
    data.password = await bcrypt.hash(data.password, 10);

    //Save to database
    sqlData = await client.query(`INSERT INTO Citizens(userType, name, email, phoneNumber, address, dateOfBirth, password, verified)
        VALUES (${data.userType}, '${data.name}', '${data.email}', '${data.phoneNumber}', '${data.address}', '${data.dateOfBirth}', '${data.password}', false)
        RETURNING *
    `)

    //JWT
    var [access_token, refresh_token] = await Promise.all([
        jwt.sign({id: sqlData.rows[0].id}, process.env.JWT_KEY, {expiresIn: '1h'}),
        jwt.sign({id: sqlData.rows[0].id}, process.env.JWT_KEY, {expiresIn: '30h'})
    ])

    return {
        message: "OK",
        data: {
            access_token: access_token,
            refresh_token: refresh_token,
            user: sqlData.rows[0]
        }
    }
}

//Validation
validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

validatePhoneNumber = phoneNumber => {
    var re = /[+][0-9]{5,15}/
    return re.test(phoneNumber)
}

validateDate = date => {
    var re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
    return re.test(date)
}

//Export
module.exports = router