const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../users/users-model.js');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../secrets/secrets.js');

router.get('/', (req,res)=> {
    res.status(200).json({message: 'api auth end point is up and running'})
})

router.post('/register', (req,res)=>{
    const user = req.body;
    const hash = bcrypt.hashSync(user.password);
    user.password = hash;
    User.addUser(user)
    .then(user => {
        if(user){
            User.findById(user[0])
            .then(([user])=>{
                res.status(200).json(user)
            }).catch(err => {
                res.status(500).json({message: 'user not created'})
            })
        }else{
            res.status(400).json({message: 'did not create user'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'can not create user'})
    })
});

router.post('/login', (req,res)=>{
    const { username , password } = req.body;
    User.findBy(username)
    .then(([user]) => {
        if(user && bcrypt.compareSync(password ,user.password)){
            const token = generateToken(user);
            res.status(200).json({message: 'you have been logged in', token})
        }else{
            res.status(401).json({message: 'invalid credentials'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'cant access datatbase' })
    })
})

function generateToken(user){
    const payload = {userid: user.id, username: user.username, department: user.department}
    const options = {expiresIn: '1h'}
    return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;