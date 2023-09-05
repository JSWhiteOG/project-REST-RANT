require('dotenv').config()
const mongoose = require('mongoose')

mongoose
.connect(process.env.MONGO_URI)
.then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })
module.exports.Place = require('./places')
