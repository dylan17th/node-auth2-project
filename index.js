const server = require('./API/server.js');
const port = process.env.PORT || 5005;

server.listen(port , ()=>{
    console.log(`api listening on port ${port}`)
})