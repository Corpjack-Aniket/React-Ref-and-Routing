import React, { useEffect, useRef, useState } from 'react'

function UseRefHook2() {
    const [inputvalue,setInputValue] =  useState();
    // const [count, setCount] = useState(0);
    const count = useRef(0);

    // useEffect(()=>{
    //     setCount(count+1)
    // },[]);


    useEffect(()=>{
      count.current = count.current+1; 
        
    });
  return (
    <div>
      <label htmlFor="">Enter Name:</label>
      <input 
      type="text"
      placeholder='Enter Name' 
      value={inputvalue}
      onChange={(e)=> setInputValue(e.target.value)}
      />
      <h2>Render Count : {count.current}</h2>
    </div>
  )
}

export default UseRefHook2
