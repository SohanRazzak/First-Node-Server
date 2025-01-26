// Making a basic server with vanilla node js
const http = require('http');

// Creating server instance
const server = http.createServer();

// createServer autometically initialise server, so it already has a instance
// thats why we dont new keyword, othere way is const server = new http.Server(), Which comes with additonal setup

// Listenting to "request" (defined on server), events
server.on('request', (req, res)=>{
    console.log(req.url);
    // Explicitly Setting Content Headers
    res.setHeader("Content-Type", "application/json")
    // Res.end expects string output
    res.end(JSON.stringify({success: true}))
})

server.listen(5000, ()=> console.log("Server running on port 5000"))