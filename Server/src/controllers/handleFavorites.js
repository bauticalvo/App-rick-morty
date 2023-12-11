let myFavorites = [];

function postFav(req, res){
    
    myFavorites.push(req.body);
   return res.json(myFavorites);
}

function deleteFavs(req,res){
    const {id} = req.params;

    myFavorites = myFavorites.filter(char => char.id !== Number(id))
    return res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFavs,
}