const appServer = require('./app')
const PORT = 3001;
const {conn} = require('./DB_connection')



appServer.listen(PORT, async() => {
   try {
      await conn.sync({force: false});
      console.log('Base de Datos sincronizada');
      console.log('Servidor escuchando en el puerto: ' + PORT);
   } catch (error) {
      console.log('Error sincronizando la base de datos:',error.message);
   }
   
});