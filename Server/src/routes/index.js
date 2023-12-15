const apiRouter = require('express').Router();
const getCharById = require('../controllers/getCharById')
const postfav = require('../controllers/postFav')
const login = require('../controllers/login')
const postUser = require('../controllers/postUser')
const deleteFav = require('../controllers/deleteFav')

apiRouter.get('/character/:id', getCharById);

apiRouter.get('/login', login);
apiRouter.post('/login', postUser);
apiRouter.post('/fav', postfav);
apiRouter.delete('/fav/:id', deleteFav);

module.exports = apiRouter;