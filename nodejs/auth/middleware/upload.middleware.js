const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(_,_,cb){
        cb(null,"uploads/")
    },
    filename: function(_,file,cb){
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
});



const checkFileFilter = (_,file,cb) => {
    if (file.mimetype.startsWith("image")){
        cb(null,true)
    }else{
        cb(new Error('Not an image! Please upload only images'))
    }
}



// multer middleware
module.exports = multer({
    storage: storage,
    fileFilter: checkFileFilter,
    limits: {
        fileSize: 5*1024*1024,
    },
});