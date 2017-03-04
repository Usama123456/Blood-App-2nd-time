import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory,Link} from 'react-router';
import hanks from './thanks';
import Signout from './signout';



export default class Donorform extends Component{
render(){
var stylep={
    fontSize: '0.7em',
    position: 'relative',
    top: '-1.5em',
    left: '-5em'
}
let stylesel={
        position: 'relative',
    top: '-3.3em',
    left: '2.5em'
}

const styleb={
    position: 'relative',
    left: '-2em'
}
    return(<div>
    <div style={{background: 'lightsalmon',width: '42em',height: '2em',position: 'relative',left: '2em',borderRadius: '0.2em'}}></div>
    <Link to='./signout'> <span style={{ position: 'relative',top: '-5.8em',left: '40em'}}>Sign Out </span></Link>
     <h2 style={{ position: 'relative',left: '2em',top: '-3em'}}>Blood Donor App</h2>
    <center>
        <h3>Donor Registration Form</h3>
        <input ref='nm' placeholder='Name'ref='pass' type='name' ></input> <br/><br/>
        <input ref='email' placeholder='Email'ref='pass' type='age'></input> <br/><br/>
        <input ref='add' placeholder='Address'ref='pass' type='email'></input> <br/><br/>
        <input ref='cont' placeholder='Contact'ref='pass' type=''></input> <br/><br/>
        <p style={stylep}>Blood group</p>
        <select style={stylesel}>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
        <option>O+</option>
        <option>O-</option>
        
        </select>
        <Link to='./thanks'> <button style={styleb}>Submit</button></Link>
     </center> 
      

      
    
        </div>          
        
    )
}
}

