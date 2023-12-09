import style from './form.module.css'
import React, { useState } from 'react'
import validation from './util/validation'

export default function Form({login}) {

  const [userData , setuserData] = useState({
    email: '',
    password: '',
  })

  const [errors , setErrors] = useState({})

  const handleChange = event => {
    const {name , value} = event.target
    setuserData({
      ...userData,
      [name]: value
        })
    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
        }))
  }

  const handleSubmit = event => {
    event.preventDefault();
    login(userData)
  }


  
    return (
    <div
    className={style.form}
      
    >
      <div className={style.form22}>
        <form className={style.f} onSubmit={handleSubmit}>

        <label className={style.label}>Email:</label> <br/>
        <input className={style.input}
        key='email'
        name='email'
        type='email'  
        id='email'
        value={userData.email}
        onChange={handleChange}
        
        /><p> {errors.email ? errors.email : null}</p>

        <label className={style.label}>Contraseña:</label><br/>
        <input className={style.input}
        key= 'password'
        name='password'
        type='password'
        id='password'
        value={userData.password}
        onChange={handleChange}
       
       /><p> {errors.password ? errors.password : null}</p>
      

        <button 
        className= {style.submitButton}
        type='submit'
        disabled= {errors.email || errors.password}
        >
          <span className={style.span} >Enviar</span>
        </button>
        
        </form></div>
    </div>
  )
}