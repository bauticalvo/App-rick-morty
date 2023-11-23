import axios from "axios"
import { useParams } from "react-router-dom"
import { useState , useEffect} from "react"
import './detail.css'


export default function Detail(props){
const {id} =  useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=henrystaff`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);


    return(
        <div 
        style={{
         textDecorationColor: '#84D0D4',
         display: 'flex',
         justifyContent: 'space-around'
     }}
        >
         <div>
          <h5 >{character.name}</h5>
          <h5 > {character.status}</h5>
          <h5> {character.species}</h5>
          <h5> {character.gender}</h5>
          <h5> {character.origin?.name}</h5>
         <h5>{character.location?.name}</h5>
          </div> 
          <div className="div2">
            <img className="imgdetail" src={character.image} alt={character.name} />
            </div>
        </div>
    )
}