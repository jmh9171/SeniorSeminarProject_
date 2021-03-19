import React from 'react';

function Testevent() {
    return (
      <div>
        <Eventname eventname="2v2 Tournament"/>
        <Playgroupname2 playgroupname2="Super cool MC Playgroup #42"/>
        <Date date="3/20/21" />
        <Time time="5:30"/>
        <Eventdescription eventdescription="We will play Minecraft for several hours" />   
      </div>
    );
  }

function Eventname(props){
    return (
      <b><p>{props.eventname}:</p></b>
    );
  }

  function Playgroupname2(props){
    return (
      <p>{props.playgroupname2}</p>
    );
  }

  function Date(props){
    return (
      <p>{props.date}</p>
    );
  }

  function Time(props){
    return (
      <p>{props.time}</p>
    );
  }

  function Eventdescription(props){
    return (
      <p>{props.eventdescription}</p>
    );
  }


const Event = () => (
    <event>

  <center>
  <div align="left"style={{maxWidth: '400px', maxHeight: '300px', overflow: 'hidden', overflow: 'auto'}}>
                <p>
                      <h2 className="w3-center"><Eventname eventname="1v1 Tournament"/></h2>
                      <b>Playgroup:</b><Playgroupname2 playgroupname2="Super cool MC Playgroup #2"/>
                      <b>Date:</b><Date date="3/19/21" />
                      <b>Time:</b><Time time="3:30"/>
                      <b>Description:</b><Eventdescription eventdescription="We will play Minecraft for 2 hours" />      
               </p>
    </div>

    </center>

    </event>
)

export default Event