const express = require('express')
const db = require('./utils/database') // importación de database
const usersRouter = require('./users/users.router')

const port = 9000

const app = express()
app.use(express.json())

db.authenticate() // comprobación exitosa con la db
    .then(() => {
        console.log('Database Autenticated')
    })
    .catch((err) => {
        console.log(err)
    })

db.sync() // sincronización de tablas de la DB con nuestros models
    .then(() => {
        console.log('Database Synced')
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.use('/api/v1', usersRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
