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
        const { usename, password } = req.body;
        const exitinigUser = await User.findOne({ usename });
        if (!exitinigUser) {
            return res.status(400).json({ success:false ,message: 'User does not exist' });
        }

        const isPasswordValid = await bcrypt.compare(password, exitinigUser.password);

        if (!isPasswordValid){
            return res.status(400).json({ success:false ,message: 'Password is incorrect' });
        }else{
            const accessToken = jwt.sign({ 
                _id: exitinigUser._id,
                username: exitinigUser.username, 
                role: exitinigUser.role,
            }, process.env.JWT_SECRET, { 
                expiresIn: '6h' 
            });

            return res.status(200).json({ 
                success: true,
                message: 'User login successfully',
                accessToken 
            });
        }
    } catch (error) {
        console.log('Error lpgin user:', error);
        res.status(500).json({ success:false ,message: 'Error registering user', error });
    }
}


module.exports = { registerUser, loginUser };