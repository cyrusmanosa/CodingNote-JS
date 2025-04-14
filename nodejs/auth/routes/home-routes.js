const express = require('express');
const authMiddleware = require('./auth-middleware');
const router = express.Router();


router.get( '/welcome', authMiddleware, (req, res) => {
    const {username, userId, role} = req.userInfo;
    res.json({ 
        message: 'Welcome to the home page!',
        user: {
            username,
            userId,
            role
        } 
    });
});


module.exports = router;