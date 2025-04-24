require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/product-route')
const bookRoute = require('./routes/book-route')

mongoose.connect(process.env.MONGO_URI).then(()=>console.log('mongodb connected successfully')).catch((e)=>console.log(e))

app.use(express.json());
app.use("/products",productRoute);
app.use("/reference",bookRoute);


app.listen(process.env.PORT,()=>{
    console.log(`Server is now running on port ${process.env.PORT}`);
})