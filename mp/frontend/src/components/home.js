import React, { Component } from 'react';
import ListItems from './listitem';
import Add from './additem';

class Home extends Component{
render(){
    return(
        <div className="container">

        <Add/>
        <ListItems/>
        
        </div>
    )
}
}
export default Home