import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Profileedit from '../components/profileedit'
import React from 'react';

export default function about() {
    return(
      <div>
      <Head>
          <title>Edit Profile</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
  <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata" />
  </div>
  
          <center><img src="images/Mainslide.jpg" style={{opacity: '0.9', width: '100%', maxHeight: '1200px'}} className="w3-margin-top" /></center>
          <div className="w3-display-middle w3-center" style={{width: '50%', height: '85%'}}>
            <span className="w3-text-white" style={{fontSize: '90px'}}>Edit Profile<br /></span>
            <center> 
              
    <div className="w3-middle-align" style={{maxWidth: '80%', maxHeight: '50%'}}>
      <Profileedit/>       
    </div>
  
  </center> 
  
  
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