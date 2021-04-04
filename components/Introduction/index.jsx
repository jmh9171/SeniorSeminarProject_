import Tags from '../Tags'
import Editable from "../Editable";
import React, { useState } from "react";



function EditText() {

  const [task, setTask] = useState("");

 
  return (
    <Editable
      text={task}
      placeholder="Edit this.."
      type="input"
    >
      <input
        type="text"
        name="task"
        placeholder="Edit this.."
        value={task}
        onChange={e => setTask(e.target.value)}
      />
    </Editable>
  );
}

function Aboutme(props){
  return (
    
    <p>
      <EditText>{props.aboutme}</EditText>
    </p>
  );
}




const Introduction = () => (
    <introduction>
    
        <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-cube fa-fw w3-margin-right w3-xxlarge w3-text-dark-grey" />Introduction</h2>

              <div className="w3-container">
                <h5 className="w3-opacity"><b>About me</b></h5>
                <Aboutme/>
                <hr />
              </div>
              


              <Tags/>


        </div>



    </introduction>
)

export default Introduction