import {ADD_FAV, FILTER, ORDER, REMOVE_FAV} from './actionstypes'
import axios from 'axios'


export const addFav = (character)=>{
   
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) =>{
      try{
      const { data } = await axios.post(endpoint, character);
      return dispatch( {
        type: ADD_FAV,
        payload: data,
      });
   } catch(error) {
      alert('No se logro agregar el personaje a favoritos')
   }
  }
 };

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint)
        .then(({ data }) => {
            return dispatch({
              type: REMOVE_FAV,
              payload: data,
          });
       });
    };
  };


export const fliterCards = (gender) => {
    return {
        type: FILTER, 
        payload:gender,
    }
}

export const orderCards = (order) => { 
    return {
        type: ORDER,
        payload: order,
    }
    
}