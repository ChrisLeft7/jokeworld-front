import React, { useState, useEffect } from 'react';


const Add = (props) => {
    let emptyJoke = {setup: '', punchline: ''}
    const [joke, setJoke] = useState(emptyJoke)

    const handleChange = (event) => {
        setJoke({...joke, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(joke)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="setup">Setup: </label>
                <input type="text" name="setup" value={joke.setup} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="punchline">Punchline: </label>
                <input type="text" name="punchline" value={joke.punchline} onChange={handleChange} />
                <input type='submit'/>
            </form> 
        </div>
    )



}


export default Add