const http = require("http")
const hostname = '127.0.0.1'
const port = 7777;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    //  res.setHeader('Content-Type', 'text/plain');
    //  res.writeHead(600, { 'Content-Type': 'text/plain' });
    res.end("welcome to http server");
})
server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}/`);
})