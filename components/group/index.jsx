import React from 'react';

function Groupinfo(props){
  return (
    <div>
        <p className="w3-middle-align w3-text-white"><img src={props.avatarURL} style={{width: '5%'}}/><i className="fa fa-fw w3-margin-right" />{props.groupname}</p>
    </div>
  );
}

const Group = () => (
    <group>
         <Groupinfo avatarURL="/images/minecraftLogo.png" groupname="Super cool MC Playgroup #1"/>
    </group>
)

export default Group