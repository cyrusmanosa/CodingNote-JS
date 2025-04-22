const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('Auth Header:', authHeader);

    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    try {
        const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userInfo = decodedTokenInfo;
        console.log('User Info:', req.userInfo);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Unauthorized' });
    }

    next();
}

module.exports = authMiddleware;