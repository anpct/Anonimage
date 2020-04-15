import React, { Component } from 'react';
import ListItems from './listitem';
import Add from './additem';

class Home extends Component{
render(){
    return(
        <div>
        <div className="card card-body mt-5">
            <h1>hi</h1>
        </div>
        <ListItems/>
        <Add/>
        </div>
    )
}
}
export default Home