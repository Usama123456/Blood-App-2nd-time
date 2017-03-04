import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory,Link} from 'react-router';
import Signup from './signup';

export default class eceiver extends Component{
    render(){
        var stylep={
    fontSize: '0.7em',
    position: 'relative',
  
    top: '9.5em',
    left: '-6em'
}
let stylesel={
        position: 'relative',
    top: '6em',
    left: '0.5em'
}
        return(<div>
        <div style={{background: 'lightsalmon',width: '42em',height: '2em',position: 'relative',left: '2em',borderRadius: '0.2em'}}></div>
        <Link to='./signout'> <span style={{ position: 'relative',top: '-5.8em',left: '40em'}}>Sign Out </span></Link>   
           <h2 style={{ position: 'relative',left: '2em',top: '-3em'}}>Blood Donor App</h2> 
           <center>
        <h3>100% germs free blood!</h3>
         <p style={stylep}>Select blood group</p>
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
        </center>
        </div>

        )
    }
}