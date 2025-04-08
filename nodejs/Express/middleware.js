const express = require('express');
const app = express();
const port = 3000;


// define a middleware function
const myFirstMiddleware = (req, res, next) => {
    console.log('this first middleware will run on every request');
    // 如果沒有呼叫 next()，則請求會被擋住
    next(); 
}


app.use(myFirstMiddleware); // register the middleware

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/about', (req, res) => {
    res.send('about page!');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})