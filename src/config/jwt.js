const jwt = require('jsonwebtoken');

const generateTokens = (userId, role) => {
    const accessToken = jwt.sign(
        {id: userId, role},
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn:'15m'}
    );

    const refreshToken = jwt.sign(
        {id: userId, role},
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn:'7d'}
    );

    return { accessToken, refreshToken };
}

const verifyToken = (token, isRefresh= false ) => {
    const secret = isRefresh ? 
    process.env.REFRESH_TOKEN_SECRET : 
    process.env.ACCESS_TOKEN_SECRET;

    return jwt.verify(token, secret);
}