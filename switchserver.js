const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // Set the default content type (optional, good practise)
    res.setHeader('Content-Type', 'text/plain');

    // Route handling using a switch statement
    switch (req.url) {
        case "/":
            res.end("You have hit the home page");
            break;
        case "/signin":
            res.end("You have hit the signin page");
            break;
        case "/signup":
            res.end("You have hit the signup page");
            break;
        case "/delete":
            res.end("You have hit the delete page");
            break;
        case "/chat":
            res.end("You have hit the chat page");
            break;
        case "/about":
            res.end("You have hit the about page");
            break;
        default:
            res.statusCode = 404; // Set HTTP status to 404
            res.end("404 Not Found: Wrong Destination");
    }
});

server.listen(8080, () => console.log('Running port: 8080'));
