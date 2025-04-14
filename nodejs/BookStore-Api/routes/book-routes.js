const express = require('express');
const { getAllBooks, getBookById, addBook, updateBook, DeleteBook } = require('../controllers/book-controller');

//create express router
const router = express.Router();

//all the routes that are related to books only
router.get('/get',getAllBooks)
router.get('/get/:id',getBookById)
router.post('/add',addBook)
router.put('/update/:id',updateBook)
router.delete('/delete/:id',DeleteBook)

module.exports = router;