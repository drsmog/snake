var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(process.env.PORT || 8877);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

app.on('request', function (req, res) {
  if (req.url === '/directions.js') {
    fs.readFile(__dirname + '/directions.js',
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading directions.js');
      }

      res.writeHead(200);
      res.end(data);
    });
  }
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('REG_PLAYER', function (data) {
    console.log(data);
  });
  socket.on('SNAKE_MOVE', function (data) {
    console.log(data);
    socket.broadcast.emit('SNAKE_MOVE', data);
  });
  socket.on('GENERATE_FOOD',function (data) {
    console.log(data);
    socket.broadcast.emit('GENERATE_FOOD',data);
  });
  socket.on('EAT_FOOD',function (data) {
    console.log(data);
    io.emit('EAT_FOOD',data);
  });
});
