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
      <h2 className="w3-center"><b><p>{props.eventname}:</p></b></h2>
      
    );
  }

  function Playgroupname2(props){
    return (
      <p><b>Playgroup:</b><p>{props.playgroupname2}</p></p>
    );
  }

  function Date(props){
    return (
      <p><b>Date:</b><p>{props.date}</p></p>
    );
  }

  function Time(props){
    return (
      <p><b>Time:</b><p>{props.time}</p></p>
    );
  }

  function Eventdescription(props){
    return (
      <p><b>Description:</b><p>{props.eventdescription}</p></p>
    );
  }


const Event = () => (
    <event>

  <center>
  <div align="left"style={{maxWidth: '400px', maxHeight: '300px', overflow: 'hidden', overflow: 'auto'}}>
                <p>
                      <Eventname eventname="1v1 Tournament"/>
                      <Playgroupname2 playgroupname2="Super cool MC Playgroup #2"/>
                      <Date date="3/19/21" />
                      <Time time="3:30"/>
                      <Eventdescription eventdescription="We will play Minecraft for 2 hours" />      
               </p>
    </div>

    </center>

    </event>
)

export default Event