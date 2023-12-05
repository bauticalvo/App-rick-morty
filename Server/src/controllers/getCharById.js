import axios from 'axios';


 async function getCharById(req, res){
  try {
    const {id} = req.params
    const URL = `https://rickandmorty.com/api/character`;

   const {data} = await axios.get(`${URL}/${id}`)
   const  {id:charId, status,  name, species, origin, 
    image , gender, location} = data;
        const character = {
            id:charId , status,  name, species, origin, 
            image , gender, location
        }

    return character.name
         ? res.json(character)
         : res.status(404).json('Not Found')
    
    
    
    } catch(error){
       return res.status(500).json( error.message)
    }
  
}

module.exports = {getCharById}