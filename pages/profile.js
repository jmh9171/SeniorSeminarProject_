import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Mainprofile from '../components/mainProfile'
import Introduction from '../components/Introduction'
import Profileplaygroups from '../components/profilePlaygroups'
//import App from '../components/profileTest'
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


 {/* Page Container */}
 <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
        {/* The Grid */}
        <div className="w3-row-padding">

          <Mainprofile/>

          {/* Right Column */}
          <div className="w3-twothird">
      
            <Introduction/>   
            <Profileplaygroups/>

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