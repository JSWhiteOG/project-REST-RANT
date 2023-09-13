const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://JSWhiteOG:ThatOneGuy1@cluster0.9poy94z.mongodb.net/project-REST-RANT')
.then(() => { console.log('YOU DID IT', 'mongodb+srv://JSWhiteOG:ThatOneGuy1@cluster0.9poy94z.mongodb.net/project-REST-RANT') })

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')
