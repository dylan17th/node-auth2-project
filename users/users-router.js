const express = require('express');
const router = express.Router();
const Users = require('./users-model.js')

router.get('/', (req,res)=> {
    Users.getUsers()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json({message: 'couldnt access database'})
    })
})

module.exports = router;