require('dotenv').config();
const express = require('express');
const conntectToDB = require('./database/db');
const app = express();
const port = process.env.PORT || 3000;
const bookRoutes = require('./routes/book-routes');
// conntect to database
conntectToDB();

// middleware -> express.json()
app.use(express.json());

//routes here
app.use('/api/books', bookRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});