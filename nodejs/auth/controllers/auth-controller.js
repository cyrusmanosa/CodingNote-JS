const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// register controller
const registerUser = async (req, res) => {
    try {
        // extract user information from our request body
        const { username, email, password,role } = req.body;
        const checkExistingUser = await User.findOne({$or: [{ username },{ email }] });
        if (checkExistingUser) {
            return res.status(400).json({ success:false ,message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newlyCreatedUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role || 'user',
        });

        await newlyCreatedUser.save();

        if (newlyCreatedUser) {
            return res.status(201).json({ success:true ,message: 'User created successfully' });
        }else{
            return res.status(400).json({ success:false ,message: 'Error creating user' });
        }
        
    } catch (error) {
        console.log('Error registering user:', error);
        res.status(500).json({ success:false ,message: 'Error registering user', error });
    }
}

// login controller
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const exitinigUser = await User.findOne({ username });
        if (!exitinigUser) {
            return res.status(400).json({ success:false ,message: 'Invalid credentials !!' });
        }

        const isPasswordValid = await bcrypt.compare(password, exitinigUser.password);

        if (!isPasswordValid){
            return res.status(400).json({ success:false ,message: 'Invalid credentials !!' });
        }else{
            const accessToken = jwt.sign({ 
                userId: exitinigUser._id,
                username: exitinigUser.username, 
                role: exitinigUser.role,
            }, process.env.JWT_SECRET_KEY, { 
                expiresIn: '6h' 
            });

            return res.status(200).json({ 
                success: true,
                message: 'User login successfully',
                accessToken 
            });
        }
    } catch (error) {
        console.log('Error lopgin user:', error);
        res.status(500).json({ success:false ,message: 'Error registering user', error });
    }
}

// change Password controller
const changePassword = async(req,res)=>{
    try {
        const userId = req.userInfo.userId;
        const { oldPassowrd, newPassword } = req.body;
        const userData = await User.findById(userId);
        if (!userData){
            return res.status(400).json({
                success: false,
                message: "not found"
            })
        }
        const isPasswordValid = await bcrypt.compare(oldPassowrd, userData.password);
        if (!isPasswordValid){
            return res.status(400).json({
                success: false,
                message: "Old password not match"
            })
        }else{
            const salt = await bcrypt.genSalt(10);
            const newPwHash = await bcrypt.hash(newPassword, salt);
            userData.password = newPwHash
            await userData.save();

            return res.status(200).json({
                success: true,
                message: "password changed !!"
            })
        }
        

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: ""
        })
    }
}


module.exports = { registerUser, loginUser, changePassword };