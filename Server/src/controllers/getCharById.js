import axios from 'axios';

export default function getCharById(res, id){
    axios(`https://rym2.up.railway.app/api/character/${id}?key=henrystaff`)
    .then(response => response.data)
    .then((data)=>{
        const character = {
            id: data.id,
            name: data.name,
            genero: data.gender,
            especie: data.species,
            origin: data.origin,
            estado: data.status,
            image: data.image,
            location: data.location,
        }
   
   
    return res
    .writeHead(200, {'Content-Type': 'application/json'})
    .end(JSON.stringify(character))

 })
  .catch( error =>
        res
    .writeHead(500, {'Content-Type': 'text/plain'})
    .end(error.message)
    )
}