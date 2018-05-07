'use strict'

var mongoose = require('mongoose'),
    Book = mongoose.model('Books')

exports.list_all_books = (req, res) => {
    Book.find({}, (err, book) => {
        if (err) {
            res.send(err)
        }
        res.json(book)
    })
}