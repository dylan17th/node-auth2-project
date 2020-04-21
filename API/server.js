const express = require('express');
const server = express();
const userRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js')

server.use(express.json());

server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);

module.exports = server;