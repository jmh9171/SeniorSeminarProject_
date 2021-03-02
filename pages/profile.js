import Head from 'next/head'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'



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


          {/* Right Column */}
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-cube fa-fw w3-margin-right w3-xxlarge w3-text-dark-grey" />Introduction</h2>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>About me</b></h5>
                <p>Blah blah blah I like to play X games for Y reason.  This is a test description and I can't think of anything else to write.  Hopefully this is long enough for my testing purposes.</p>
                <hr />
              </div>
              
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Favorite tags</b></h5>
                <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>FPS</p>
                </div>

                <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>MMO</p>
                </div>

                <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>JRPG</p>
                </div>

                <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>MMORPG</p>
                </div>

                <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>CASUAL</p>
                </div>

                <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>RACING</p>
                </div>

                <p></p>
              </div>
            </div>


            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-list fa-fw w3-margin-right w3-xxlarge w3-text-dark-grey" />My Playgroups</h2>
              <div className="w3-container">
                
                <h5 className="w3-opacity"><b>Minecraft</b></h5>
                <p><img src="/images/blankP.png" style={{width: '5%'}} alt="Avatar" /><i className="fa fa-fw w3-margin-right" />Super cool MC Playgroup #1</p>

                <p><img src="/images/blankP.png" style={{width: '5%'}} alt="Avatar" /><i className="fa fa-fw w3-margin-right" />MC Playgroup for casuals</p>


                <h5 className="w3-opacity"><b>League of Legends</b></h5>
                <p><img src="/images/blankP.png" style={{width: '5%'}} alt="Avatar" /><i className="fa fa-fw w3-margin-right" />League of Legends fanclub</p>


                <hr />
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