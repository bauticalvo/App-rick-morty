const appServer = require('./app')
const PORT = 3001;


appServer.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});