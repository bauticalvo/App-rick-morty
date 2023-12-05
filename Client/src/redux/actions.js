import {ADD_FAV, FILTER, ORDER, REMOVE_FAV} from './actionstypes'
import axios from 'axios'


export async function addFav(character){
   try{
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      const { data } = await axios.post(endpoint, character);
  
      return {
        type: ADD_FAV,
        payload: data,
      };
   } catch(error) {
      throw new Error('No se logro agregar el personaje a favoritos')
   }
 };

 export async function removeFav(id){
   try {   
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   const {data} = await axios.delete(endpoint);
   
          return {
             type: REMOVE_FAV,
             payload: data,
       };
       
   }catch(error) {
      throw new Error('No se logro eliminar el personaje a favoritos')
   }
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