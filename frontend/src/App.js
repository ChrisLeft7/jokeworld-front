import '../src/App.css'
import React, { useState } from 'react';
import axios from 'axios'
import Add from './components/Add';
import Edit from './components/Edit';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ComedyClub from './components/ComedyClub';
import cloud from '../src/clouds.png';
import { Link } from 'react-router-dom'
import Home from './components/Home';

const App = () => {

  const [randomJoke, setRandomJoke] = useState("")


  const getRandomJoke = () => {

    

    axios.get('https://official-joke-api.appspot.com/jokes/random')
    .then((res) => {
      console.log(res.data)
      setRandomJoke(res.data.setup + "..." + res.data.punchline);
    })
  }







  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/comedyclub' element={<ComedyClub />}></Route>
        
        
      </Routes>
    </>
    



      



      



    
  );
}

export default App;
