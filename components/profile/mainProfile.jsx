import Link from 'next/link'
import Styles from '../index.module.css'

const Mainprofile = () => (
    <mainprofile>
    
    <meta charSet="UTF-8" />

    <style dangerouslySetInnerHTML={{__html: "\nhtml,body,h1,h2,h3,h4,h5,h6 {font-family: \"Roboto\", sans-serif}\n" }} />

    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </div>


    <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container w3-center">
                <img src="/images/blankP.png" style={{width: '80%', marginTop: '15px'}} alt="Avatar" />
              </div>
              <div className="w3-container">
              <center><p><i/>SoraSoren</p></center>
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
                  <div className="w3-container w3-center w3-round-xlarge w3-dark-grey" style={{width: '75%'}}>75%</div>
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