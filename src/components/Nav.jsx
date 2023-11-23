import React from "react";
import style from './navBar.module.css';
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";


export function Nav({onSearch, logout}){
    
    return (
        <div className={style.divNav}>
          <SearchBar onSearch={onSearch}   /> 
          <button className={style.neon} >
            <NavLink
            to='/about' style={({isActive}) => isActive ? {color: 'pink'} : {color:"black"}}
            >About</NavLink>
          </button>
          <button className={style.neon} >
            <NavLink
            to='/home' style={({isActive}) => isActive ? {color: 'pink'} : {color:"black"}}
            >Home</NavLink>
          </button>
          <button className={style.neon} >
            <NavLink
            to='/favorites' style={({isActive}) => isActive ? {color: 'pink'} : {color:"black"}}
            >Favorites</NavLink>
          </button>
          <button className={style.neon} >
            <NavLink
            onClick={logout}
            style={({isActive}) => isActive ? {color: 'black'} : null }
            >Logout ╳</NavLink>
          </button>
        </div>
    )
}


