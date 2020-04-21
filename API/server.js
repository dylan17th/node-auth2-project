const express = require('express');
const server = express();
const userRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');
const middleAuth = require('../auth/auth-middle.js')

server.use(express.json());

server.use('/api/users', middleAuth, userRouter);
server.use('/api/auth', authRouter);

module.exports = server;