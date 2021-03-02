import Head from 'next/head'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'


export default function about() {
return(
  
    <div className="bgimg w3-display-container w3-grayscale-min" id="home">

    <Head>
    <Header/> 
        <title>About Us</title>
        //Hello
        <link rel="icon" href="/favicon.ico" />

        <center><img src="images/AboutHead.jpg" style={{width: '100%', maxHeight: '800px'}} className="w3-margin-top" /></center>
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
          {/* About Container */}
          <div className="w3-container" id="about">
            <div className="w3-content" style={{maxWidth: '700px'}}>
              <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT PLAYGROUP</span></h5>
              <p>Playgroup is designed to connect small groups of individuals through online interaction easily to help alleviate the pain of using game specific group finders.  No matter what the game is, users will easily be able to find other like-minded individuals to play their favorite games with. </p>
              <p>This web application is designed to collect as little information as possible from its users and will not be providing any user data to other large corporations.  Our mission is to create a safe, non-invasive, free platform for people to find or create their own niche groups on.</p>
              <div className="w3-panel w3-leftbar w3-light-grey">
                <p><i>"Privacy is not an option, and it shouldn't be the price we accept for just getting on the Internet."</i></p>
                <p>Chief Executive Officer of AVG Technologies: Gary Kovacs</p>
              </div>
            </div>
          </div>
          
          {/* Menu Container */}
          <div className="w3-container" id="menu">
            <div className="w3-content" style={{maxWidth: '1000px'}}>
              <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">THE MISSION</span></h5>

             
            <div className="w3-container" id="about">

            <div>
              <center><img src="/images/Heart.png" style={{width: '50%', maxWidth: '500px'}} className="w3-margin-top" /></center>
              <center><h3><p>Connect with others who have a similar approah to gaming as you!</p><br /></h3></center>
             

            </div>


            <div>
              <center><img src="/images/Profile.png" style={{width: '50%', maxWidth: '1000px'}} className="w3-margin-top" /></center>
              <center><h3><p>Customize your profile and Playgroup in a way that works for you.</p><br /></h3></center>
            </div>



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