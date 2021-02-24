import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'



export default function about() {
return(
    <div>
    <Head>
        <title>This is the login page</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    
    <meta charSet="UTF-8" />

<style dangerouslySetInnerHTML={{__html: "\nhtml,body,h1,h2,h3,h4,h5,h6 {font-family: \"Roboto\", sans-serif}\n" }} />

    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </div>


 {/* Page Container */}
 <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
        {/* The Grid */}
        <div className="w3-row-padding">
          {/* Left Column */}
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img src="/images/blankP.png" style={{width: '70%'}} alt="Avatar" />
              </div>
              <div className="w3-container">
              <p><img src="/images/blankP.png" style={{width: '8%'}} alt="Avatar" /><i className="fa fa-fw w3-margin-right" />SoraSoren</p>
                <p><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />My name is Louis and I like to play MMORPG's.  I also play League of Legends because I hate myself.</p>

                <hr />
                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Preferred games</b></p>
                <p>Maplestory</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '90%'}}>90%</div>
                </div>

                <p>FFXIV</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '80%'}}>
                    <div className="w3-center w3-text-white">80%</div>
                  </div>
                </div>

                <p>League of Legends</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '75%'}}>75%</div>
                </div>



                <br />
                <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />Languages</b></p>
                <p>English</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-round-xlarge w3-teal" style={{height: '24px', width: '100%'}} />
                </div>
                <p>Spanish</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-round-xlarge w3-teal" style={{height: '24px', width: '80%'}} />
                </div>
            
                <br />
              </div>
            </div><br />
            {/* End Left Column */}
          </div>


          {/* Right Column */}
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Work Experience</h2>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jan 2015 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Web Developer / something.com</b></h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Mar 2012 - Dec 2014</h6>
                <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jun 2010 - Mar 2012</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br />
              </div>
            </div>
            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Education</h2>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>W3Schools.com</b></h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Forever</h6>
                <p>Web Development! All I need to know in one place</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>London Business School</b></h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2013 - 2015</h6>
                <p>Master Degree</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>School of Coding</b></h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2010 - 2013</h6>
                <p>Bachelor Degree</p><br />
              </div>
            </div>
            {/* End Right Column */}
          </div>
 



          {/* End Grid */}
        </div>
        {/* End Page Container */}
      </div>


    
  
    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>



        
    <Footer/> 
    </div>

);
}