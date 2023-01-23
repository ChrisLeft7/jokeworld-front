import React, { useState } from 'react';


const Edit = (props) => {
    const [joke, setJoke] = useState({...props.joke})


    const handleChange = (event) => {
        setJoke({...joke, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(joke)
    }


    return (
        <div key={joke.id}>
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

export default Edit