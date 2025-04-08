const express = require('express');
const app = express();
const port = 3000;

// Middleware

app.use(express.json());
let books = [
    { id: 1, title: '1984'},
    { id: 2, title: 'Brave New World'},
    { id: 3, title: 'Fahrenheit 451'}
];

// intro route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Book API!'
    });
});

app.get('/get', (req, res) => {
    res.json(books);
});


app.get('/get/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }else {
        return res.status(200).json(book);
    }
});

app.post('/add', (req, res) => {
    const newBook = {id : Math.random()*100 ,title: "dsfsdfsdf"}
    books.push(newBook);

    if (res.status(201)) {
        return res.status(201).json({
            message: 'Book added successfully',
            data: books
        });
        // return res.status(201).json(newBook);
    }else{
        return res.status(400).json({ message: 'Error adding book' });
    }

})

app.put('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const findBook = books.find(b => b.id === id);
    if (!findBook) {
        return res.status(404).json({ message: 'Book not found' });
    }else{
        findBook.title = req.body.title || findBook.title;
        return res.status(200).json({
            message: `Book ${findBook.id} updated successfully`,
            data: books
        });
    }
})

app.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);
    if (!bookIndex) {
        return res.status(404).json({ message: 'Book not found' });
    } else {
        books.splice(bookIndex, 1);
        return res.status(200).json({
            message: `Book ${id} deleted successfully`,
            data: books
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})