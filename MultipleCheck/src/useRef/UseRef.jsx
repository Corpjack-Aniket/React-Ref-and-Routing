import React, { Component, createRef } from 'react'

export default class UseRef extends Component {
    constructor(props) {
      super(props)
    
      //! if you donot want react ref in import we can create manually 
    //   this.myRef = React.createRef();
      this.myRef = createRef();
      this.myRef2 = createRef();
    }

    componentDidMount(){
        console.log(this.myRef);
        console.log(this.myRef.current.innerHTML);
        
    }


    handleHeading = ()=>{
         this.myRef.current.align = 'right';    
         
        //  this.myRef.current.hidden = true;    

        this.myRef.current.style.color ="red";  

        this.myRef.current.style.backgroundColor ="yellow";  
        this.myRef2.current.style.color ="red";  

        this.myRef2 .current.style.backgroundColor ="yellow";  
    }
    
  render() {
    return (
      <div>
        <h1 ref={this.myRef}>Welcome to Use Ref Hook</h1>
        <h1 ref={this.myRef2}>This is Second Ref</h1>
        <button onClick={this.handleHeading}>Clcik Me</button>
      </div>
    )
  }
}
