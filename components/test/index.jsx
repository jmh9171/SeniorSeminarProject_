import Addlabel from '../addlabel';

import React from 'react';
import ReactDOM from "react-dom";


class Addlabel1 extends React.Component{

    shouldComponentUpdate = () => true

    
callForce = () => {
    this.forceUpdate()
}
    
    constructor(){
        super();
            this.state = {
                children: [],
    
        }
        
        
    }

    

    appendChild(){
        this.setState({
            
            children: [ 
                <Addlabel />
                
            ]
        });
    }

   
  
    render(){
        return(
            <div>  
                <button type="button" onClick={() => this.appendChild()}>Add tag</button>
                <div className="box-container">
                    
                    {this.state.children.map(child => child)}
                    
                </div>
            </div>
        );
    }
  }

  
export default Addlabel1;