import React from 'react';

/**
 * WARNING: This file will not rerender when saved
 * if changes are made please save and restart the server
 */

function Gametitle(props) {
  return (
    <h5 className="w3-opacity"><b>{props.gametitle}</b></h5>
  );
}

function Gamegroup(props) {
  return (
    <p><img src={props.imgsrc} style={{ width: '5%' }} alt="Avatar" /><i className="fa fa-fw w3-margin-right" />{props.groupname}</p>
  );
}

const Profileplaygroups = (props) => (
  <profileplaygroups>
    <div className="w3-container w3-card w3-white">
      <h2 className="w3-text-grey w3-padding-16"><i className="fa-fw w3-margin-right w3-xxlarge w3-text-dark-grey" />My Playgroups</h2>
      <div className="w3-container">
        {props.userGroups.userGroups.map(({ playgroup_name }) => (
          <Gamegroup imgsrc="/images/blankP.png" groupname={playgroup_name} />
        ))}
        <hr />
      </div>
    </div>
  </profileplaygroups>
)

export default Profileplaygroups