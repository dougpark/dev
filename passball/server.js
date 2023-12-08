var express = require('express');
//var app = require('express')();
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
var app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
let counter = 0;
let connectedUsers = 0; 
const { dateCST } = require('./utils/dateCST');


console.log('chat starting now');

app.use(express.static('./public'));

// dont use bodyParser for this one what
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

app.get('/', (req, res) => {
  console.log('client connecting...');
    res.sendFile(__dirname + '/index.html');
});

app.get('/ball', (req, res) => {
    console.log('ball client connecting...');
      res.sendFile(__dirname + '/public/ball.html');
  });

io.on('connection', (socket) => {
    connectedUsers++;
    console.log('a user connected, total connected= ' + connectedUsers);

    socket.on('disconnect', () => {
        connectedUsers--;
        console.log('user disconnected, total connected= ' + connectedUsers);
    });
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        // console.log('message: ' + msg + "=== " + counter + ', connectedUsers= ' + connectedUsers);
    });
});

io.on('connection', (socket) => {
    socket.on('chat message', (packet) => {
        packet = JSON.parse(packet);
        action = 'return';
        message = packet.message;
        counter++;
        packet = {
            action: action,
            counter: counter,
            message: message,
            connectedUsers: connectedUsers
        }
        io.emit('chat message', JSON.stringify(packet));
    });
});

function getStatus() {
    counter++;
    packet = {
        action: 'petCat',
        counter: counter,
        message: 'The Cat Responds ' + dateCST(),
        connectedUsers: connectedUsers
    }
    io.emit('chat message', JSON.stringify(packet));
    //console.log(JSON.stringify(packet));

}

function initGameInterval() {
    // check for updates every n seconds
  setInterval(function () {
        getStatus();
    }, 1000);
}

initGameInterval();
 
http.listen(port, () => {
    console.log(dateCST() + ' socket demo: listening on port *:' + port);
});