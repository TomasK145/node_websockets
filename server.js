const http = require('http');
const websocket = require('ws');

const server = http.createServer((req,res) => {
    res.end("I am connected");
});
const wss = new websocket.Server({ server });

wss.on('headers', (headers, req) => {
    //console.log(headers); //not logging the header anymore
})

//Event: connection
wss.on('connection', (ws, req) => {
    ws.send('This is message from server, connection is established');
    //receive the message from client on Event 'message'

    ws.on('message', (msg) => {
        console.log(msg);
    });
});

server.listen(8000);