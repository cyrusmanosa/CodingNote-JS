const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cyrusmanosa:@cluster0.a3mq1dl.mongodb.net/')
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log(err));


    const Scchema = new mongoose.Schema({
        name : String,
        email : String,
        age : Number,
        isActive : Boolean,
        tags : [String],
        createdAt : {type: Date, default: Date.now},
    });

    //create user model
    const User = mongoose.model('User', Scchema);

    async function runQueryExamples() {
        try{
            //-- create a new document 1 
            // const newUser = await User.create({
            //     name : "Cyrus",
            //     email : "asdnklasd@gmail.com",
            //     age : '42',
            //     isActive : true,
            //     tags : ['node', 'mongodb', 'express'],
            // })

            //-- create a new document 2
            // const newUser = new User({
            //     name : "Cyrus",
            //     email : "asdnklasd@gmail.com",
            //     age : '42',
            //     isActive : false,
            //     tags : ['node', 'mongodb', 'express'],
            // })
            // await newUser.save();
            // console.log('New user created:', newUser);  

            // show mongoDB ObjectID
            // const getLastCreatedUser = await User.findById(newUser._id);
            // console.log('Last created user:', getLastCreatedUser);



            //-- get all documents in User 
            // const alluser = await User.find({});
            // console.log(alluser);


            // Find Data with query
            // const getUserOfActiveFalse = await User.find({isActive : false});
            // console.log(getUserOfActiveFalse);


            // const selectedFields = await User.find({}).select('name email -_id');
            // console.log(selectedFields);
            
            // const limitedFields = await User.find({}).limit(2).skip(1);
            // console.log(limitedFields);

            // const sortedUser = await User.find({}).sort({age : -1});
            // console.log(sortedUser);

            // const countDocument = await User.countDocuments({ isActive : true});
            // console.log(countDocument);

            // Delete a document
            // const Del = await User.create({
            //     name : "DDDDD",
            //     email : "delete@gmail.com",
            //     age : '1',
            //     isActive : true,
            //     tags : ['node', 'mongodb', 'express'],
            // })

            // const deleteUser = await User.findByIdAndDelete(Del._id);
            // console.log('Deleted user:', deleteUser);


            // Update a document
            const updat = await User.create({
                name : "UUUUU",
                email : "update@gmail.com",
                age : '1222',
                isActive : true,
                tags : ['node', 'mongodb', 'express'],
            })
            const updateUser = await User.findByIdAndUpdate(updat._id, {
                $set : {name : 'CyrusManosa'},
                $push : {tags : 'updated'}
            },{ new : true });
            
            console.log('Updated user:', updateUser);

            
        }catch(err){
            console.log(err);
        } finally {
            await mongoose.connection.close();
        }
    }
    runQueryExamples();