import React from 'react';
import fetcher from '../../lib/fetchJson'

function GroupinfoFind(props) {

  async function joinGroup() {
    const groupname = props.groupname
    try {
      const joinGroup = await fetcher('/api/join-group', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          groupname
        }),
      })
    } catch (e) {
      console.log("GroupFind index: ", e.message)
    }
  }

  return (
    <div>
      <p className="w3-middle-align w3-text-white" style={{ fontSize: "25px", padding: "20px" }}><img src={props.avatarURL} style={{ width: '10%' }} /><i className="fa fa-fw w3-margin-right" />{props.groupname}<button type="button" onClick={joinGroup} style={{ padding: "5px", margin: "20px", width: "15%", backgroundColor: "lightgrey" }}>Join </button></p>
    </div>
  );
}


const GroupFind = (props) => (
  <group>
    <GroupinfoFind avatarURL="/images/minecraftLogo.png" groupname={props.name} />
  </group>
)

export default GroupFind