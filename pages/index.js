import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'



export default function about() {
return(
  
    <div className="bgimg w3-display-container w3-grayscale-min" id="home">

    <Head>
    <Header/> 
        <title>Welcome to Playgroup</title>
        //Hello
        <link rel="icon" href="/favicon.ico" />

        <center><img src="images/Mainslide.jpg" style={{width: '99%', maxHeight: '800px'}} className="w3-margin-top" /></center>
        <div className="w3-display-middle w3-center">
          <span className="w3-text-white" style={{fontSize: '90px'}}>Playgroup<br /></span>
        </div>
        <div className="w3-display-bottomright w3-center w3-padding-large">
          <span className="w3-text-white">Img src: pexels.com</span>
        </div>

        
    </Head> 


 <style jsx>{`

    body, html {
      height: 100%;
      font-family: "Inconsolata", sans-serif;
    }
    
    .bgimg {
      background-position: center;
      background-size: cover;
      background-image: url("/images/AboutHead.jpg");
      min-height: 75%;
    }
    
    .menu {
      display: none;
    }

            `}</style>

    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata" />
        
        {/* Add a background color and large text to the whole page */}

        <div className="w3-sand w3-grayscale w3-large">
          {/* Main Container */}
          <div className="w3-container" id="about">
            <div className="w3-content" style={{maxWidth: '700px'}}>
              <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT PLAYGROUP</span></h5>
              <p> Welcome to the playgroup where we try to cutomize your gaming experience for maximume fun </p>
             
              <div className="w3-panel w3-leftbar w3-light-grey">

              </div>
            </div>
          </div>
          




          {/* Menu Container */}
          <div className="w3-container" id="menu">
            <div className="w3-content" style={{maxWidth: '1000px'}}>
          
              
            <div>
              <center><img src="/images/AboutTG.jpg" style={{width: '50%', maxWidth: '500px'}} className="w3-margin-top" /></center>
              <center><h3><p>Learn more about our site by heading to the about page</p><br /></h3></center>
             

            </div>
            <div>
              <center><img src="/images/NewsTG.jpg" style={{width: '50%', maxWidth: '500px'}} className="w3-margin-top" /></center>
              <center><h3><p>Keep up to date on all things GroupPlay on our site news tab</p><br /></h3></center>
             

            </div>


            <div>
              <center><img src="/images/EventsTG.jpg" style={{width: '50%', maxWidth: '500px'}} className="w3-margin-top" /></center>
              <center><h3><p>FInd out about new and exitining events that are open to every one</p><br /></h3></center>
             

            </div>

            <div>
              <center><img src="/images/JustchattingTG.jpg" style={{width: '50%', maxWidth: '500px'}} className="w3-margin-top" /></center>
              <center><h3><p>Find a group to go and play your favorite games</p><br /></h3></center>
             

            </div>


             
            <div className="w3-container" id="about">

    



            </div>
             




            </div>
          </div>
          {/* End page content */}
          <Footer/> 
        </div>
        
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


    </div>

);
}