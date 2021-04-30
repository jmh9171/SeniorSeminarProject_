import React from 'react';

function Groupinfo(props){
  return (
    <div>
        <p className="w3-middle-align w3-text-white" style={{fontSize: "25px", padding: "20px"}}><img src={props.avatarURL} style={{width: '10%'}}/><i className="fa fa-fw w3-margin-right"/>{props.groupname}</p>
    </div>
  );
}

const Group = (props) => (
    <group>
         <Groupinfo avatarURL="/images/minecraftLogo.png" groupname={props.group}/>
    </group>
)

export default Group