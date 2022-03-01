// const fs = require('fs');
// fs.readdir('./', function(err, files) { //read files in current folder
//     if (err) console.log('Error', err);
//     else console.log('Result:', files); // if success, print all fule in current folder
// });

const http = require('http');

//create server
const server = http.createServer((req, res) => { // (request, response)
    if (req.url === '/') { /// root URL
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/course') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.on('connection', (socket) => { // (socket) => {} is a callback function (for error?)
    console.log('New connection...');
});

server.listen(3000);
console.log('Listen on port 3000...');
