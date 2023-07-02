const { createServer } = require('http')


const { app } = require('electron')

const runServer = (dir, port) => {
  const requestHandler = require(dir)
  requestHandler.set('port', port || 3001);

  const server = createServer(requestHandler)

  server.listen(port || 3001, () => {
    app.on('before-quit', () => server.close())
  })
}

module.exports = async (dir, port) => {
  await runServer(dir, port)
}
