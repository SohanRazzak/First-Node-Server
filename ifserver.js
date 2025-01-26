const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // Set default Content-Type
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === "/") {
        res.end("You have hit the home page");
    } else if (req.url === "/signin") {
        res.end("You have hit the signin page");
    } else if (req.url === "/signup") {
        res.end("You have hit the signup page");
    } else if (req.url === "/delete") {
        res.end("You have hit the delete page");
    } else if (req.url === "/chat") {
        res.end("You have hit the chat page");
    } else if (req.url === "/about") {
        res.end("You have hit the about page");
    } else {
        // Handle undefined routes
        res.statusCode = 404; // Set HTTP status to 404
        res.end("404 Not Found: Wrong Destination");
    }
});

server.listen(8080, () => console.log('Running on port: 8080'));
