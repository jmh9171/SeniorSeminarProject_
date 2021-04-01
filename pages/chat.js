import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Group from '../components/group'
import EntryForm from '../components/entry-form'
import button from '../components/button'
import Picturehead from '../components/picturehead'
import Aboutplaygroup from '../components/aboutplaygroup'
import Themission from '../components/themission'



export default function about() {
return(
  
    <div className="bgimg w3-display-container w3-grayscale-min" id="home">

    <Head>
    <Header/> 
    
        <title>Chat</title>
        <link rel="icon" href="/favicon.ico" />

        
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
        <div className="w3-grey w3-grayscale w3-large">
            
            {/* Menu Container */}
            <div className="w3-container" id="menu">
                    <div className="w3-content" style={{maxWidth: '1500px'}}>
                    <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">Group chat</span></h5>


                    
<div className="w3-left" style={{maxWidth: '500px', borderStyle: 'hidden', maxHeight: '600px', overflow: 'hidden', overflow: 'auto'}}>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
      <Group/>
       
</div>


<div className="w3-center" style={{maxWidth: '500px', borderStyle: 'dotted', maxHeight: '600px', overflow: 'hidden', overflow: 'auto'}}>
      {/* 
          Put html here
      */}
       
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