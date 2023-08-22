//Using http module inbuilt given by node we can setup a basic server
const http = require('http');
const PORT = 3000;
/**
 * Http module contains a function createServer
 * This createServer function takes a callback as the input
 * Inside the callback,we get two arguments
 * - request -> This argument contains all details about the incoming request
 * - response -> This argument contains functions using which we can prepare the response
 * 
 * The createServer function returns us the server object
 */

const server = http.createServer(function exec(request, response){
    console.log(request.method);
    if(request.url == '/home'){
        response.end("Welcome to home");
    }
    else response.end(`Welcome to ${request.url}`);
});

server.listen(PORT, function process(){
    //Once server has started then this callback will be executed
    console.log("Server started on port", PORT);
});