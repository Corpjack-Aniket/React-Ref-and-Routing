import React, { useState } from 'react'

function MultipleCheck() {
    const [fruitArray,setFruitArray]=useState([]);
    const handleChange = (e)=>{
        const value = e.target.value;
        const check = e.target.checked;
        console.log(value);
        console.log(check);
        if(checked)
        {
          setFruitArray([
            ...fruitArray, value 
          ])
        }
        else{
          setFruitArray([
            // fruitArray.filter((e)=>console.log('e=>'+e , 'value =>'+value))
            fruitArray.filter((e)=>console.log(e!==value))
          ])
        }
        
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(fruitArray);
    }
  return (
    <div>
      <form onSubmit={handleSubmit} >
      <label htmlFor="">Select Fruits : &nbsp;</label>

      <input type="checkbox" name='fruits' value='Apple' onChange={handleChange}/>
      <label htmlFor="">&nbsp;Apple</label>
      &nbsp;
      <input type="checkbox" name='fruits' value='Mango'  onChange={handleChange}/>
      <label htmlFor="">&nbsp; Mango</label>
      &nbsp;
      <input type="checkbox" name='fruits' value='Grapes'  onChange={handleChange}/>
      <label htmlFor="">&nbsp; Grapes</label>
      &nbsp;
      <input type="checkbox" name='fruits' value='banana'  onChange={handleChange}/>
      <label htmlFor="">&nbsp; Banana</label>
      <br /><br />
      <input type="button" value="Submit" />
      </form>
    </div>
  )
}

export default MultipleCheck
