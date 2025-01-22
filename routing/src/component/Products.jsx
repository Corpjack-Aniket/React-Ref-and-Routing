import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
   <>
    <div>
      <h2>This is My Product Pages</h2>
    </div>
    <nav>
      <Link to="shirts">Shirts</Link>
      <Link to="jeans">Jeans</Link>
    </nav>
    {/* //! for rendering product to show on web */}
    <Outlet/>
    {/* //! outlet is used to show child component  */}
   </>
  )
}

export default Products
