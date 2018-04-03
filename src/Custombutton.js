import React, { Component } from 'react';
import './App.css';
import 'react-s-alert/dist/s-alert-default.css';

export default class Custombutton extends React.Component{
render()
{
    return(
        
            <button className={this.props.className} onClick={this.props.onClick}>{this.props.title}</button>        
            
        
    )


}
}