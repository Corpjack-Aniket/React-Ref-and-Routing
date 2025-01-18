import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultipleCheck from './multiplecheck/MultipleCheck'
import UseRef from './useRef/UseRef'
import UnControlled from './uncontrlComp/UnControlled'
import CallbackRef from './callBackRef/CallbackRef'
import UseRefHook from './callBackRef/UseRefHook'
import UseRefHook2 from './callBackRef/UseRefHook2'

function App() {

  return (
 <div className='test'>
   {/* <MultipleCheck/> */}
   {/* <UseRef/> */}
   {/* <UnControlled/> */}
   {/* <CallbackRef/> */}
  {/* <UseRefHook/> */}
   <UseRefHook2/>
 </div>
  )
}

export default App
