import React, { useEffect, useRef } from 'react'

function UseRefHook() {
    // const newRef = useRef();
     const firstRef = useRef();
     const lastRef = useRef();

    useEffect(()=>{
        // console.log(newRef);
        console.log(firstRef);
        console.log(lastRef);
    });

    //  const handleHeading =()=>{
    //   newRef.current.style.color = 'red';
    //   newRef.current.style.fontFamily ='cooper';
    //   newRef.current.hidden =true;
    //  }
  return (
    <div>
      {/* <h1 ref={newRef}>this is useRef code</h1>
      <button onClick={handleHeading}>Submit</button> */}

      <form>
        <label htmlFor="">Enter first Name:</label>
        <input type="text" ref={firstRef} placeholder='First Name' />
        <br /><br />
        <label htmlFor="">Enter Last Name:</label>
        <input type="text" ref={lastRef} placeholder='Last Name' />
        <br /><br />
        <input type="button" value="Submit" />
      </form>
    </div>
  )
}

export default UseRefHook
