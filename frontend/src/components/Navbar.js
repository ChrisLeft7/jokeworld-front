import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link href='/home' className='title'>Jokeworld. </Link>
        <ul>
            <li><Link to='/dirty'>Dirty</Link></li>
            <li><Link to='/comedyclub'>ComedyClub</Link></li>
            
        </ul>
    </nav>
  )
}

export default Navbar