import React from "react";
import style from './search.module.css'

export default function SearchBar(props) {
    //* props = { onSearch: (characterID) => window.alert(characterID)}

   const [id, setId] = React.useState("")

   const handleChange = event =>{
      const {value} = event.target
      setId(value)
      
   }
   
   const handleClick = event => {
      event.preventDefault()
      props.onSearch(id)
      setId("")
   }

  const handleRandom = () => {
		const randomNumber = Math.floor(Math.random() * 826) + 1;
		props.onSearch(randomNumber);
   }
    return (
       <div className={style.search}>
          <input className={style.input} type='text' name="search" id="search" value={id} onChange={handleChange} /> 
          <button className={style.neon} onClick={handleClick}>Agregar</button>
          <button className={style.neon} onClick={handleRandom}>Random</button>
       </div>
    );
 }