const express = require('express');
const app = express();
const port = 3000;


const requestTimestampLogger = (req, res, next) => {
    const timeStamp = new Date().toISOString();

    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next();
}

app.use(requestTimestampLogger);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/about', (req, res) => {
    res.send('about page!');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})