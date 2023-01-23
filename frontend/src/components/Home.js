import React from 'react'
import { useState, useEffect } from 'react';
import cloud from '../../src/clouds.png';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {

    const [randomJoke, setRandomJoke] = useState("")


  const getRandomJoke = () => {

    

    axios.get('https://official-joke-api.appspot.com/jokes/random')
    .then((res) => {
      console.log(res.data)
      setRandomJoke(res.data.setup + "..." + res.data.punchline);
    })
  }







  return (

    <div>
      <div className='sky'>
         
         <h1 className='title'>Jokeworld.</h1>
         <div className='generator'>
             <h4>Click Me</h4>
             <button onClick={getRandomJoke}><i className="fa-sharp fa-solid fa-face-laugh-beam"></i></button>
             <h2>{randomJoke}</h2>
        </div>
         
         
         <div className='earth'>
           <h5><Link to='/comedyclub'>ENTER</Link></h5>
         </div>
       
         <div className='clouds'>
           <div><img src={cloud}/></div>
           <div><img src={cloud}/></div>
           <div><img src={cloud}/></div>
           <div><img src={cloud}/></div>
           <div><img src={cloud}/></div>
           <div><img src={cloud}/></div>
           <div><img src={cloud}/></div>
           <div><img src={cloud}/></div>
           
         </div>
        
      </div>  
    </div>
    



      



      



    
  );

  
}

export default Home