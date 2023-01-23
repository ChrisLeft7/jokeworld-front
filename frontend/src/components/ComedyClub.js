import React from 'react'
import Add from './Add';
import Edit from './Edit';
import axios from 'axios';
import { useState, useEffect } from 'react';
import cloud from '../../src/clouds.png';
import { Link } from 'react-router-dom';


const ComedyClub = () => {

    const [jokes, setJokes] = useState([])

  const getJokes = () => {
    axios.get('http://localhost:8000/api/jokes')
    .then((res) => {
      console.log(res.data)
      setJokes(res.data)
    })
  }

  const handleCreate = (addJoke) => {
    axios.post('http://localhost:8000/api/jokes', addJoke)
    .then((res) => {
      console.log(res)
      getJokes()
    })
  }

  const handleUpdate = (editJoke) => {
    axios.put('http://localhost:8000/api/jokes/' + editJoke.id, editJoke)
    .then((res) => {
      getJokes()
    })
  }


  const handleDelete = (event) => {
    axios.delete('http://localhost:8000/api/jokes/' + event.target.value)
    .then((res) => {
      console.log(res.data)
      getJokes()
    })
  }

  

  useEffect(() => {
    getJokes()
  }, [])


  return (
    <div className='clearsky'>
        
        <h1 className='title2'>Jokeworld.</h1>
        <Add handleCreate={handleCreate} />
        <div className='big container'>
            {jokes.map((joke) => {
            return (
                    <div key={joke.id}>
                        <div className='card'>
                            <div className='face face1'>
                                <div className='content'>
                                    <h3>{joke.punchline}</h3>
                                    <Link to='/edit'><button>Edit</button></Link>
                                    
                                </div>
                            </div>
                            <div className='face face2'>
                                <div className='content'>
                                    <h2>{joke.setup}</h2>
                                </div>
                            </div>
                            
                        </div>
                        <button onClick={handleDelete} value={joke.id}>
                                X
                        </button>
                    </div>
                
            )
            })}
            <h5><Link to='/'>RETURN HOME</Link></h5>
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
  )
}

export default ComedyClub;



{/* <div key={joke.id}>
              <h2>Setup: {joke.setup}</h2>
              <h3>Punchline: {joke.punchline}</h3>
              
              <Edit handleUpdate={handleUpdate} id={joke.id} joke={joke} />
              <button onClick={handleDelete} value={joke.id}>
                X
              </button>
            </div> */}