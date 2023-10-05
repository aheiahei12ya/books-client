const { createServer } = require('http');


const { app } = require('electron');

const runServer = (dir, port) => {
  const expressApp = require(dir).app;
  expressApp.set('port', port || 3001);

  const server = createServer(expressApp);

  server.listen(port || 3001, () => {
    app.on('before-quit', () => server.close());
  });
};

module.exports = async (dir, port) => {
  await runServer(dir, port);
};
