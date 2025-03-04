"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import http 
const http_1 = __importDefault(require("http"));
// server opening
const server = http_1.default.createServer((request, response) => {
    // server routes
    // index/home route
    if (request.url === "/") {
        response.writeHead(200, { "content-type": "text/html" });
        response.end("<h1>Home</h1>");
        return;
    }
    //About
    if (request.url === "/about") {
        response.writeHead(200, { "content-type": "text/html" });
        response.end("<h1>About</h1>");
        return;
    }
    // My account
    if (request.url === "/my-account") {
        response.writeHead(403, { "conten-type": "text/plain" });
        response.end("You have no acces to this page");
        return;
    }
    response.writeHead(404, { "content-type": "text/plain" });
    response.end("Page bot found");
    return;
});
// port to run the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
