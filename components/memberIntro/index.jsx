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
        Please write something about yourself..
      </p>
    );
  }

const MemberIntro = () => (
    <memberintro>

    

          
       {/* Intro */}
       <div className="w3-container w3-card w3-white w3-margin-bottom"  style={{}}>
 <h2 className="w3-text-grey w3-padding-64"><i className="fa-fw w3-margin-right w3-text-dark-grey" />Introduction</h2>
 <div className="w3-container" >
   {/* Header */}
   <h5 className="w3-opacity"><b>About me</b></h5>
   {/* Actual text */}
   <Aboutme/>
   <hr />
 </div>
</div>
      
     





    </memberintro>
)

export default MemberIntro



 