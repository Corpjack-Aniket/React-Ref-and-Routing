import React from 'react'
import { NavLink } from 'react-router-dom'

function Activelink() {
  return (
<nav className='main-nav'>

<NavLink to='/'>Home</NavLink>
<NavLink to='/products'>Products</NavLink>
<NavLink to='/about'>About</NavLink>
<NavLink to='/contact'>Contact</NavLink>
</nav>
  )
}

export default Activelink
