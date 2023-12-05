import { ADD_FAV, FILTER, REMOVE_FAV , ORDER} from "./actionstypes"
import axios from 'axios'


const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState , {type, payload}) => {
    switch(type){
        case ADD_FAV: 
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,
            
        }
        case REMOVE_FAV:
             return { ...state, myFavorites: payload };
        
        case FILTER: {
            if(payload === 'All'){
                return {
                    ...state,
                    myFavorites: state.allCharacters,
                }
            }
                const filteredGender = state.allCharacters.filter(
                    element => element.gender === payload 
                )
            return{
                ...state,
                myFavorites: filteredGender,
            }
        }
        case ORDER: {

            const orderChars = [...state.myFavorites];
            
            if(payload === 'A'){
                orderChars.sort((a, b) => a.id - b.id)
            }
            if(payload  === 'D'){
                orderChars.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: orderChars,
            }
        }
        default:
            return {
            ...state
            }
    }
}

export default reducer;