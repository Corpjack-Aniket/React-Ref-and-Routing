import React, { Component, createRef } from 'react'

export default class UnControlled extends Component {
    constructor(props) {
      super(props)
        
      this.nameRef = createRef();
      this.ageRef = createRef();
     
    }

    componentDidMount()
    {
        console.log(this.nameRef);
        console.log(this.ageRef);
        this.nameRef.current.focus();
        
    }

    handleChanging  = (e)=>{
        e.preventDefault();
        console.log(this.nameRef.current.value);
        console.log(this.ageRef.current.value);
    }
    
  render() {
    return (
      <form onSubmit={this.handleChanging}>
        <label htmlFor="">Enter Name:</label>
        <input ref={this.nameRef} type="text" placeholder='Enter Name' />
        <br /><br />
        <label htmlFor="">Enter age:</label>
        <input ref={this.ageRef} type="number" placeholder='Enter Age' />
        <br /><br />    
        <label htmlFor="">Enter age:</label>
        <input ref={this.ageRef} type="number" placeholder='Enter Age' />
        <br /><br />
        <button >Submit</button>
      </form>
    )
  }
}
