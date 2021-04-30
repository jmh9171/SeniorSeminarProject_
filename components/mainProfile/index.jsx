import React from 'react';
import fetcher from '../../lib/fetchJson';


function App({ username }) {

  return (
    <div>
      <Username />
      <Avatar avatarURL="https://placekitten.com/g/64/64" />
      <Preferredgame Preferredgame="Maplestory" />
      <Preferredgame Preferredgame="League of Legends" />
      <Preferredgame Preferredgame="FFXIV" />
      <Preferredgame Preferredgame="Rocket League" />
      <Preferredgame Preferredgame="Warframe" />
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

function Avatar(props) {
  return (
    <img src={props.avatarURL} style={{ width: '80%', marginTop: '15px' }} alt="Avatar" />
  );
}

function Preferredgame(props) {

  return (
    <p>{props.preferredgame}</p>
  );
}




const Mainprofile = (props) => (
  <mainprofile>
    <div className="w3-third">
      <div className="w3-white w3-text-grey w3-card-4">
        <div className="w3-display-container w3-center">
          <Avatar avatarURL="https://placekitten.com/g/64/64" />
        </div>
        <div className="w3-container">
          <center><p><i /><Username name={props.nameOfUser} /></p></center>

          <hr />
          <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-dark-grey" />Preferred games</b></p>
          {props.userGames.userGames.map(({ game }) => (
            <Preferredgame preferredgame={game} />
          ))}
          <center><p style={{ fontSize: "20px", color: "black" }}><a href="/profileEditForm">Edit Profile</a></p></center>
          <br />
          <br />
        </div>
      </div><br />
    </div>


  </mainprofile>
)

export default Mainprofile