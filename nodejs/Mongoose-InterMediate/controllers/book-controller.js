const Author = require('../models/Author')
const Book = require('../models/Book')


const createAuthor = async(req,res)=>{
    try {
        const author = await Author(req.body);
        await author.save();


        res.status(201).json({
            success: true,
            data: author
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Some error occured"
        })
    }
}

const createBook = async(req,res)=>{
    try {
        const book = await Book(req.body);
        await book.save();


        res.status(201).json({
            success: true,
            data: book
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Some error occured"
        })
    }
}


const getBookWithAuthor = async(req,res)=>{
    try {

        const book = await Book.findById(req.params.id).populate('author') // 類似 mysql join 的功能
        if (!book){
            return res.status(400).json({
                success: false,
                message: 'book not found'
            })
        }


        res.status(201).json({
            success: true,
            data: book,
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Some error occured"
        })
    }
}



module.exports = {
    createAuthor,
    createBook,
    getBookWithAuthor
}