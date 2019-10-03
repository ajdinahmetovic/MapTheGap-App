const express = require('express')

const app = express()
const port = process.env.PORT || 8000

//Routes
app.get('/', (req, res, next) => {
    res.status(200).json({message: "Hello!"})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})