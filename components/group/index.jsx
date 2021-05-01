import React from 'react';

function Groupinfo(props){
  return (
    <div>
       <p className="w3-middle-align w3-text-white" style={{fontSize: "25px", padding: "20px"}}><img src={props.avatarURL} style={{width: '10%'}}/><i className="fa fa-fw w3-margin-right"/>{props.groupname}<button type="button" style={{padding: "5px", margin: "20px", backgroundColor: "lightgrey"}}><a href="/groupMembers">Members</a> </button></p>
    </div>
  );
}


const Group = (props) => (
    <group>
         <Groupinfo avatarURL={props.avatarURL} groupname="Super cool MC Playgroup #1"/>
    </group>
)


export default Group