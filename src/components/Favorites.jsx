import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { fliterCards, orderCards } from '../redux/actions'




export default function Favorites({onClose}) {

    const [aux, setAux] = useState(false)

    const myFavorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch()
 
    const handleOrder = event => {
      dispatch(orderCards(event.target.value));
      setAux(true)
    }

    const handleFilter = event => {
      dispatch(fliterCards(event.target.value))
    }

  return (
    <div>
      <div>
             <select name='order' onChange={handleOrder}>
               <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
            </select>
            <select name='filter' onChange={handleFilter}>
               <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
      </div>
        <div
            style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-evenly",
               
            }}
         >
           
            {
               !myFavorites.length
               ? <h5 style={{color:'#80d0d4'}}>No hay favoritos</h5>
               :
               myFavorites.map(myFavorite => (
                  <Card
                     key={myFavorite.id}
                     id={myFavorite.id}
                     name={myFavorite.name}
                     status={myFavorite.status}
                     species={myFavorite.species}
                     gender={myFavorite.gender}
                     origin={myFavorite.origin}
                     image={myFavorite.image}
                     onClose={onClose}
                  />
               ))
            }
         </div>


    </div>
  )
}
