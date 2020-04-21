const express = require('express');
const router = express.Router();

router.get('/', (req,res)=> {
    res.status(200).json({message: 'api auth end point is up and running'})
})

module.exports = router;