import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <div className="nav-center">
            <span className='logo'>MixMatch</span>
            <div className='nav-links'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/newsletter'>Newsletter</NavLink>
            </div>
        </div>
    </nav>
  )
}
