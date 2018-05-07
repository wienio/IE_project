'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var bookSchema = new Schema({
    name: {
        type: String
    },
    author: {
        type: String
    }
})

module.exports = mongoose.model('Books', bookSchema)