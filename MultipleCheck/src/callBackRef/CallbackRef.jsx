import React, { Component } from 'react'

export default class CallbackRef extends Component {
    constructor(props) {
      super(props)
    
      this.myRef = null;
      this.setMyRef = (element)=>{
        this.myRef = element;
      }
    }

    componentDidMount(){
        console.log(this.myRef);
        // this.myRef.focus();
    }
    
  render() {
    return (
      <div>
        <label htmlFor="">Enter Name:</label>
        <input type="text" ref="this.setMyRef" placeholder='Enter Your Name'/>
        <br /><br />
        <input type="button" value="Submit" />
      </div>
    )
  }
}
