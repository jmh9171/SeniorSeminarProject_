import React from 'react';
import fetcher from '../../lib/fetchJson'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react'


export default function GroupFind(props) {

  const { route, setRoute } = useState();
  const router = useRouter()


  async function joinGroup() {
    const groupname = props.name

    try {
      const joinGroup = await fetcher('/api/join-group', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          groupname
        }),
      })

      router.push('/profile')
    } catch (e) {
      console.log("GroupFind index: ", e.message)
    }
  }




  return (
    <group>
      <p className="w3-middle-align w3-text-white" style={{ fontSize: "25px", padding: "20px" }}>
        <img src={"/images/minecraftLogo.png"} style={{ width: '10%' }} />
        <i className="fa fa-fw w3-margin-right" />
        {props.name}
        <button
          type="button"
          onClick={joinGroup}
          style={{ padding: "5px", margin: "20px", width: "15%", backgroundColor: "lightgrey" }}
          onChange={(e) => setRoute(true)}>
          Join
            </button>
      </p>
    </group>
  )
}

