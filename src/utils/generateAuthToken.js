const jwt = require('jsonwebtoken');
const generateAuthToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return token;
}
const verifyAuthToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        return null;
    }
}
const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
    const decoded = verifyAuthToken(token);
    if (!decoded) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
    req.userId = decoded.userId;
    next();
}
module.exports = {
    generateAuthToken,
    verifyAuthToken,
    authenticate
}
