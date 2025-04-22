const Image = require('../models/Image');
const { uploadToCloudinary } = require('../helpers/cloudinaryHelper.js');
const fs = require('fs')
const cloudinary = require('../config/cloudinary.js')

const uploadImageController = async(req,res)=>{
    try{
        if (!req.file){
            return res.status(400).json({
                success: false,
                message: 'File is required. Please upload an image',
            })
        }
        const { url,publicId } = await uploadToCloudinary(req.file.path)
        const newlyUploadedImage = new Image({
            url,
            publicId,
            uploadedBy: req.userInfo.userId
        })

        await newlyUploadedImage.save();

        fs.unlinkSync(req.file.path)

        res.status(200).json({
            success: true,
            message: 'upload Image successfully',
            image: newlyUploadedImage
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "fail",
        })
    }
};

const fetchImagesController = async(req, res) => {
    try {
        const userId = req.userInfo.userId;
        const images = await Image.find({uploadedBy: userId})
        if (images && images.length > 0){
            res.status(200).json({
                success: true,
                data: images,
            })
        }else{
            res.status(500).json({
                success: false,
                message: "not find the image",
                data: null,
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({

        })
    }
}

const deleteImageController = async(req,res) =>{
    try {
        const getCurrentIdOfImageToBeDeleted = req.params.id;
        const userId = req.userInfo.userId;

        const image = await Image.findById(getCurrentIdOfImageToBeDeleted);
        if (!image){
            return res.status(400).json({
                success: false,
                message:"Image not found"
            })
        }

        if (image.uploadedBy.toString() !== userId) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to dalete this image"
            })
        }

        await cloudinary.uploader.destroy(image.publicId);

        await Image.findByIdAndUpdate(getCurrentIdOfImageToBeDeleted);

        return res.status(200).json({
            success: true,
            message: "this image deleted"
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message:"Something went wrong! "
        })
    }
}


module.exports = {
    uploadImageController,
    fetchImagesController,
    deleteImageController
};