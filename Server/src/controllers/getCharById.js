const axios = require('axios')


 async function getCharById(req, res){
  try {
    const charId = req.params.id
    const URL = "https://rickandmortyapi.com/api/character";

   const {data} = await axios.get(`${URL}/${charId}`)
   const  {id, status,  name, species, origin, 
    image , gender, location} = data;
        const character = {
            id , status,  name, species, origin, 
            image , gender, location
        }

    return character.name
         ? res.json(character)
         : res.status(404).json('Not Found')
    
    } catch(error){
       return res.status(500).json( error.message)
    }
  
}

module.exports = getCharById