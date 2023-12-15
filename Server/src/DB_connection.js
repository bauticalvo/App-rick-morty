require('dotenv').config();
const { Sequelize } = require('sequelize');
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> 
const sequelize = new Sequelize(
  ` postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

UserModel(sequelize);
FavoriteModel(sequelize);

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite,{through: "user_favorite"});
Favorite.belongsToMany(User,{through: "user_favorite"})


module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
