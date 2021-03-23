import React from 'react';

function App() {
  return (
    <div>
      <Username name="SoraSoren"/>
      <Avatar avatarURL="https://placekitten.com/g/64/64"/>
      <Preferredgame Preferredgame="Maplestory"/>
      <Preferredgame Preferredgame="League of Legends"/>
      <Preferredgame Preferredgame="FFXIV"/>
      <Preferredgame Preferredgame="Rocket League"/>
      <Preferredgame Preferredgame="Warframe"/>
    </div>
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


const Mainprofile = () => (
    <mainprofile>

    <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container w3-center">
                  <Avatar avatarURL="https://placekitten.com/g/64/64"/>
              </div>
              <div className="w3-container">
              <center><p><i/><Username name="SoraSoren"/></p></center>
               
                <hr />
                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-dark-grey" />Preferred games</b></p>
                <Preferredgame preferredgame="Maplestory"/>
                <Preferredgame preferredgame="League of Legends"/>
                <Preferredgame preferredgame="FFXIV"/>
                <Preferredgame preferredgame="Rocket League"/>
                <Preferredgame preferredgame="Warframe"/>

{/*                 
                <div className="w3-light-grey w3-round-xlarge w3-small">
                <center><p><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /></p></center>
                </div>
 */}

                <br />
                <br />
              </div>
            </div><br />
            {/* End Left Column */}
          </div>


    </mainprofile>
)

export default Mainprofile