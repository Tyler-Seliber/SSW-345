//1 - try global object
//console.log("Welcome to node");

//2 - try function and global object setTimeout()
/* function myFunc(arg) {
    console.log(`arg was => ${arg}`);       
  }
  
setTimeout(myFunc, 1500, 'demo');
 */

 //3 - other global object
 /* setTimeout();
 clearTimeout();
 setInterval();
 clearInterval(); */
 // all above global objects belong to "global" object.
 
//4 - try use os module 
/* const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem; 

console.log( `Total memory is: ${totalMem}`);
console.log( `Free memory is: ${freeMem}`);
 */

//5 - try use http module
const http = require('http');
const server = http.createServer(function(req, res){
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    }

    // 6 - adding a new endpoint to our server. 
    // After re-starting the server with this code, you should 
    // be able to connect to http://localhost:3000/api/course in your browser
    // and see an array of static course. We will learn how to generate dynamic
    // content by connecting to DB later.
    if (req.url === '/api/course') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }

});

server.listen(3000);
console.log('Listening on prot 3000'); //display hello world from http server, when connected.


//Final remark: If more and more routes/endpoints are added, the code inside the 
//createServer() block will become lengthy and difficult to maintain. We dont want 
// to hard code all the end points in if-statements. Later, we will learn another 
// Node framework, i.e. "express", to keep code in better strcture.
 