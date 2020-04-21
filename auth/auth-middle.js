const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../secrets/secrets.js');

module.exports = (req,res,next)=>{
    const { authorization } = req.headers;
    if(authorization){
        jwt.verify(authorization, jwtSecret, (err, decodedUser) =>{
            if(err){
                res.status(404).json({message: 'invalid token in headers'})
            }else{
                req.decodedToken = decodedUser;
                next();
            }})
    }else{
        res.status(401).json({message: 'no token in headers'})
    }
}