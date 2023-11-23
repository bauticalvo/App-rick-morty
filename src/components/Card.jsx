import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { useState , useEffect} from "react";
import { addFav, removeFav } from "../redux/actions";
import style from './card.module.css'

export default function Card(props) {
   
   const dispatch = useDispatch()
   const [isFav, setIsFav] = useState(false)
   const myFavorites = useSelector(state => state.myFavorites)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(props.id))
      } else {
         setIsFav(true)
         dispatch(addFav(props))
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);

    return (
       <div
       style={{
         backgroundColor: '#84D0D4',
         margin: '20px',
         padding: '20px',
         borderRadius: '15px',
         width: '300px',
         height: '700px'
      }}
       >
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

          <button onClick={() => props.onClose(props.id)}>
            <svg viewBox="0 0 448 512" className={style.trash}>
               <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
            </svg>
          </button>
          <br></br>
          <h4>{props.name}</h4>
          <h4>Estado:{props.status}</h4>
          <h4>Especie: {props.species}</h4>
          <h4>Genero: {props.gender}</h4>
          <h4>Origen: {props.origin}</h4>
          <Link to={`/detail/${props.id}`}><img src={props.image} alt={props.name} /></Link>
          
          
       </div>
    );
 }