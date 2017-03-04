import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory,Link} from 'react-router';
import Signup from './signup';


export default class hanks extends Component{
    render(){
        return(<div>
        <div style={{background: 'lightsalmon',width: '42em',height: '2em',position: 'relative',left: '2em',borderRadius: '0.2em'}}></div>
        <Link to='./signout'> <span style={{ position: 'relative',top: '-5.8em',left: '40em'}}>Sign Out </span></Link>
        <h2 style={{ position: 'relative',left: '2em',top: '-3em'}}>Blood Donor App</h2>
        <center>
        <p>Thank You,You are Awesome! You have contributed to save humanity!</p>
        </center>
        </div>

        )
    }
}





