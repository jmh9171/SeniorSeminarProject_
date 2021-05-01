
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

function Username(props) {
  return (
    <p>
      Username: {props.name}
    </p>
  );
}

function Avatar(props){
  return (
    <img src={props.avatarURL} style={{width: '80%', marginTop: '15px'}} alt="Avatar"/>
  );
}

function Preferredgame(props){
  return (
    <p>{props.preferredgame}</p>
  );
}

function Aboutme(props){
    return (
      
      <p>
        Please write something about yourself..  I am tesing a very long description to see what happens when it runs off the page....  It looks good so far..
      </p>
    );
  }

const Member = () => (
    <member>

    <div className="w3-third" style={{margin: "0px", padding: "10px"}}>
        <div className="w3-white w3-text-grey w3-card-4" style={{padding: "10px"}}>
            <center><p style={{padding: "0px"}}><i/><Username name="SoraSoren"/></p></center>
            <div className="w3-display-container w3-topmiddle" style={{padding: "5px", width: "95%"}}>
                  <Avatar avatarURL="https://placekitten.com/g/64/64"/>
                  <p></p>
                        {/* Intro */}
                        <div className="w3-container w3-card w3-white w3-margin-bottom "  style={{}}>
                            <h2 className="w3-text-grey"><i className="fa-fw w3-margin-right w3-text-dark-grey" />Introduction</h2>
                            <div className="w3-container" >
                                {/* Header */}
                                    <h5 className="w3-opacity"><b>About me</b></h5>
                                {/* Actual text */}
                                    <Aboutme/>
                            </div>
                        </div>

            </div>
        </div>
    </div>


          
      
     





    </member>
)

export default Member