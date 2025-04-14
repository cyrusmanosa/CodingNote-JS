const Book = require('../models/book');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        if (books?.length > 0) {
            return res.status(200).json({ message: 'Books fetched successfully', data: books });
        }else{
            res.status(404).json({ message: 'books not find', error: error.message });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error fetching books', error: error.message });
        console.error('Error fetching books:', error);
    }
}

const getBookById = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await Book.findById(bookId);
        if (book) {
            return res.status(200).json({ message: 'Book fetched successfully', data: book });
        } else {
            return res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        console.error('Error fetching book:', error);
        return res.status(500).json({ message: 'Error fetching book', error: error.message });
    }
}

const addBook = async (req, res) => {
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if (newlyCreatedBook) {
            return res.status(201).json({ message: 'Book created successfully', book: newlyCreatedBook });
        }
    } catch (error) {
        console.error('Error creating book:', error);
    }
}

const updateBook = async (req, res) => {
    try {
        const updateBookData = req.body;
        const bookId = req.params.id;
        const book = await Book.findByIdAndUpdate(bookId, updateBookData, { new: true });
        if (book) {
            return res.status(200).json({ message: 'Book updated successfully', book });
        } else {
            return res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        console.error('Error updating book:', error);
        return res.status(500).json({ message: 'Error updating book', error: error.message });
    }
}

const DeleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await Book.findByIdAndDelete(bookId);
        if (book) {
            return res.status(200).json({ message: 'Book deleted successfully' });
        }else{
            return res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        console.error('Error deleting book:', error);
        return res.status(500).json({ message: 'Error deleting book', error: error.message });
    }
    
    
}

module.exports = { getAllBooks, getBookById, addBook, updateBook, DeleteBook };