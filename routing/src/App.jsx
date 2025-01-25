import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import Activelink from './component/Activelink'
import PageNotFound from './component/PageNotFound'
import Products from './component/Products'
import Shirts from './component/Shirts'
import Jeans from './component/Jeans'
import User from './component/User'
import UserDetails from './component/UserDetails'
import Admin from './Admin'


function App() {
 const navigate =  useNavigate();

 //!Navigating using event handler 
//  const NavigatetoAbout = ()=>{
//   navigate('/about');
//  }

//! Navigating to multiple pages using single handler
// const Navigateto= (url)=>{
//   navigate(url);
//  }

//! Navigation using Condition based 
const NavigatetoWhere = () =>{
   let name  = 'Aniket';
   if(name== 'Aniket'){
      navigate('/contact')
   }
   else{
    navigate('/')
   }
}


  return (
    <>
    <Activelink/>
   <Routes>
    <Route path='/' element={<Home/>}/> //! slash represent localhostn:3000
    <Route path='/about' element={<About/>}/>
    //! Nested Route example here 
    <Route path='/products' element={<Products/>}>
    {/* //!creating index root for product root */}
    <Route index element={<Shirts/>}></Route>
      <Route path='shirts' element={<Shirts/>} />
      <Route path='jeans' element={<Jeans/>}/>
    </Route>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/user' element={<User/>  }/>
    {/* this is first way */}
    {/* <Route path='/user/1' element={<UserDetails/>}/>
    <Route path='/user/2' element={<UserDetails/>}/>
    <Route path='/user/3' element={<UserDetails/>}/> */}
    {/* this is second way */}
    <Route path='/user/:id' element={<UserDetails/>}/>
    <Route path='/user/admin' element={<Admin/> }/>
    <Route path='*' element={<PageNotFound/>} /> //!* means that if any route did not match it will redirect to this route.
   </Routes>

   {/* //! Navigating using button click  */}
   {/* <button onClick={()=>navigate('/')}>Home</button> */}
   {/* <button onClick={()=>navigate('/about')}>About</button> */}
   {/* //! Navigating using Event handler */}
   {/* <button onClick={()=>NavigatetoAbout()}>About</button>
   <button onClick={()=>navigate('/contact')}>Contact</button> */}

   {/* //!Navigation to multiple pages using single event handler */}
   {/* <button onClick={()=>Navigateto('/')}>Home</button>
   <button onClick={()=>Navigateto('/about')}>About</button>
   <button onClick={()=>Navigateto('/contact')}>Contact</button> */}

   {/* //! condition based Navigation  */}
   {/* <button onClick={()=>NavigatetoWhere()}>Contact</button>
   <button onClick={()=>navigate(-1)}>Go Back</button> */}

   </>
  )
}



export default App;
