const apiRouter = require('express').Router();

const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const {postFav , deleteFavs} = require('../controllers/handleFavorites')

apiRouter.get('/character/:id', getCharById);
apiRouter.get('/login', login);
apiRouter.post('/fav', postFav);
apiRouter.delete('/fav/:id', deleteFavs);

module.exports = apiRouter;