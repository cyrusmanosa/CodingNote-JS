const Image = require('../models/Image');
const { uploadToCloudinary } = require('../helpers/cloudinaryHelper.js');


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
            uploadedBy : req.userInfo.userId
        })

        await newlyUploadedImage.save();

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


module.exports = {
    uploadImageController,
};