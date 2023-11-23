import React from "react"
import style from './about.module.css'

export function About() {

    
      

return (
 
    <div className={style.about}>
        <p>Juan Bautista Calvo</p> 
        <p>20 años</p>  
        <p>🌎 San Juan, Argentina 🌎</p> 
        <ul>
        <li>Perfiles</li> 
        <li><a  href="https://github.com/bauticalvo"  target="_blank">Github 👀</a> </li>
        <li><a  href="https://www.linkedin.com/in/bautista-calvo-668613238/"  target="_blank">Linkedin ⚡</a> </li>
        <li><a  >bito.bc@gmail.com 📧</a> </li>
        </ul>
    </div>
)
}

