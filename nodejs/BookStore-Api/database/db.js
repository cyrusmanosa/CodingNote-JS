const mongoose = require('mongoose');

const conntectToDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://cyrusmanosa:UNyj8gLhNUNbHWPb@cluster0.5l6viau.mongodb.net/");
        console.log('Connected to MongoDB');
    }catch(err){
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

module.exports = conntectToDB;