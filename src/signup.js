import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory} from 'react-router';

class Signup extends Component {0
   constructor(props){
       super(props)
   this.sigup=this.sigup.bind(this);
} 


sigup(s){
    s.preventDefault();
    const useremail=this.refs.email.value;
     const userpass=this.refs.pass.value;
     console.log(useremail);
    console.log(userpass); 
    const promise=firebase.auth().createUserWithEmailAndPassword(useremail,userpass);
    promise.then(user=>{
        alert("Sign Up successful!");
        hashHistory.push('./signin')
    })   
}

    render(){
        return(
            <div>
            <div style={{background: 'lightsalmon',width: '42em',height: '2em',position: 'relative',left: '2em',borderRadius: '0.2em'}}></div>
             <h2 style={{ position: 'relative',left: '2em',top: '-3em'}}>Blood Donor App</h2>
            <center>
            <br/> <br/> <br/> <br/> <br/>
            <label>User email:</label><br/>
            <input placeholder='User email' type='email' ref='email'></input>  <br/> <br/>
<label>Password:</label><br/>
            <input placeholder='Password' type='password' ref='pass'></input> <br/><br/>
            <button onClick={this.sigup}>Sign Up!</button>
            </center>
            </div>
        )
    }
}

export default Signup;