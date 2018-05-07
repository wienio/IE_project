module.exports = (app) => {
    var bookList = require('../controllers/booksController')

    app.route('/books')
        .get(bookList.list_all_books)
    // .post(bookList.add_book);


    // app.route('/books/:bookId')
    //     .get(bookList.read_a_book)
    //     .put(bookList.update_a_book)
    //     .delete(bookList.delete_a_book)
}
