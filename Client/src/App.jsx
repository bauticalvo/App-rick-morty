import style from './App.module.css';
import {Cards} from './components/Cards.jsx';
import { Nav} from './components/Nav.jsx'
import { About} from './components/About.jsx'
import  {useEffect, useState} from 'react';
import axios from 'axios'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Detail  from './components/Detail.jsx'
import NotFound from './components/util/NotFound.jsx';
import Form from './components/Form.jsx';
import Favorites from './components/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';


function App() {
   // console.log(characters);

   const [characters, setCharacters] = useState([])
   const [access , setAccess] = useState(false)


   const navigate = useNavigate()
   const location = useLocation()
   const dispatch = useDispatch()

  async function login(userData) {
     try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
    
     const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         if(access){
         setAccess(access);
         navigate('/home');
      }
     } catch (error) {
         alert('Contraseña o email incorrecto')
      }
      ;
   }

   useEffect(() => {
      // este es el correcto
      //!access && navigate('/'); 
      !access && navigate('/home');
   }, [access]);

   function logout(){
      setAccess(false)
      
   }

   async function onSearch(id) {
      try{
      const characterId = characters.filter(char => char.id === Number(id))
      if(characterId.length) {
         return alert(`${characterId[0].name} ya existe!`)
      }
      
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
          if(data.name) {
               setCharacters([...characters, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
      navigate('/home')

   } catch(error){
      alert( error.message)
   }
}

   const onClose = id => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
      dispatch(removeFav(id))
   }

   return (
      <div className={style.app} >
         { // la navbar no aparece en el login
            location.pathname !== '/' &&  <Nav onSearch={onSearch} logout= {logout} />
         }
         
         <Routes>
            <Route path='/' element={<Form login= {login} />} />
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path="*" element={<NotFound />} />
           
         </Routes>
      <hr/>
     
      </div>
   );
}

export default App;