import React, { Component } from 'react';

class ClassComponent extends Component{
    render(){
        return(
        <div className='InernalComponent Class-Background'>
            <h1>This is created using class Component</h1>
            <p className='bold'>This is done using external CSS</p>
            <p style={{color: 'blue', fontWeight: 'bold'}}>This is done using inline CSS</p>
        </div>
        )
    }
}


export default ClassComponent;