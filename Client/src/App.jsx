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


   const EMAIL = 'bito.bc@gmail.com'
   const PASSWORD = 'bito22'
   const navigate = useNavigate()
   const location = useLocation()
   const dispatch = useDispatch()

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } 
   }
   useEffect(() => {
      // este es el correcto
      //!access && navigate('/'); 
      !access && navigate('/');
   }, [access]);

   function logout(){
      setAccess(false)
      
   }

   function onSearch(id) {
      const characterId = characters.filter(char => char.id === Number(id))
      if(characterId.length) {
         return alert(`${characterId[0].name} ya existe!`)
      }


      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
      navigate('/home')
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