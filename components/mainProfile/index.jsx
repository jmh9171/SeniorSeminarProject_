import React from 'react';

function App() {
  return (
    <div>
      <Greeting name="SoraSoren"/>
    </div>
  );
}

function Greeting(props) {
  return (
    <p>
      Hello! I'm {props.name}.
    </p>
  );
}

function Avatar(props){
  return (
    <img src={props.avatarURL} style={{width: '80%', marginTop: '15px'}} alt="Avatar" />
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
              <center><p><i/><Greeting name="SoraSoren"/></p></center>
                <p><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-dark-grey" />My name is Louis and I like to play MMORPG's.  I also play League of Legends because I hate myself.</p>

                <hr />
                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-dark-grey" />Preferred games</b></p>
                <p>Maplestory</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                <center><p><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /></p></center>
                </div>

                <p>FFXIV</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                 
                <center><p><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /></p></center>
                </div>

                <p>League of Legends</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                <center><p><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /><i className="fa fa-star fa-fw w3-margin-right w3-text-yellow" /></p></center>
                </div>
                
                <br />
                <br />
              </div>
            </div><br />
            {/* End Left Column */}
          </div>


    </mainprofile>
)

export default Mainprofile