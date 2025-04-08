const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');


// set the directory for views
app.set('views', path.join(__dirname, 'views'));

const products = [
    { id: 1, title: 'Product 1'},
    { id: 2, title: 'Product 2'},
    { id: 3, title: 'Product 3'},
]

app.get('/', (req, res) => {
    res.render('home',{title: 'Home',products: products});
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'this about page'});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});