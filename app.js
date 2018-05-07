var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    dbConfig = require('./dbConnection'),
    Book = require('./api/models/bookModel'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    expressSession = require('express-session')


mongoose.Promise = global.Promise
mongoose.connect(dbConfig.url)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(expressSession({ secret: 'secretKey' }))
app.use(passport.initialize())
app.use(passport.session())

var routes = require('./api/routes/booksRoutes')
routes(app)

app.listen(port);

console.log('REST API server started on: ' + port);
