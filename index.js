require('dotenv').config()
let express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    db = require('./db');

let _io;
let AuthRoute = require('./routes/auth')();

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Route Files
app.use(AuthRoute);

app.all('*', (req, res) => {
    res.status(404).json({
        message : "Invalid route access",
        status : 404
    });
});

// socket functions
io.on('connection', socket => {
    _io = socket;
    console.log('New socket Connection found ', _io.id);
    _io.on('testGet', data => console.log(data));
    _io.emit('testSend',{"message" : "hi"})
});

db.connection(err => {
    if(err) {
        console.log('err', err);
    } else {
    
    // Database Streams
        const userStream = db.get().collection('users').watch();
        userStream.on('change', data => {
            _io.emit('userChange', data);
        });
    
        http.listen(1234, () => {
            console.log("App started");
        });
    }
});