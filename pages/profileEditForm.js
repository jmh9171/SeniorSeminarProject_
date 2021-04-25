import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Mainprofile from '../components/mainProfile'
import Introduction from '../components/Introduction'
import Profileplaygroups from '../components/profilePlaygroups'
//import App from '../components/profileTest'
import Event from '../components/event'
import React from 'react';

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


          <div>
            
            {/* Put code here */}
          
            <div>
              
        <div className="test">
          <label htmlFor="text2">Enter something: </label>
          <input type="text" id="text2" />
        </div>
        <p>Sample text</p>
      </div>

          </div>
    
    
     
          <style jsx>{`

            PASTE CSS IN HERE IF YOU NEED IT

          `}</style>
        
      
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