const http = require('http');
const port = process.env.PORT;

if (!port) {
  console.error('PORT not set in environment');
  process.exit(1);
}

const requestListener = function(req, res) {
  res.writeHead(200);
  res.end('Hello, world!');
};

const server = http.createServer(requestListener);
server.listen(port, '0.0.0.0', () => {
  console.log(`server started on [::]:${port}.`);
});

const shutdown = () => {
  server.close(() => {
    process.exit(0);
  });
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
