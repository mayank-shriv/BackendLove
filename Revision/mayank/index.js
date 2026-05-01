let http = require("http");
http.createServer(function (req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("Hello World!");
}).listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
}
);