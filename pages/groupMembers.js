import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Mainprofile from '../components/mainProfile'
import Introduction from '../components/Introduction'
import Profileplaygroups from '../components/profilePlaygroups'
//import App from '../components/profileTest'
import Event from '../components/event'
import Member from '../components/member'
import MemberIntro from '../components/memberintro'
import React from 'react';


export default function about() {
return(
    <div>
    <Head>
        <title>This is the login page</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    
<meta charSet="UTF-8" />

    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </div>

      <center><img src="images/JustchattingTG.jpg" style={{opacity: '0.9', width: '100%', maxHeight: '1200px'}} className="w3-margin-top" /></center>
      
<div className="w3-display-middle w3-center" style={{width: '100%', height: '85%'}}>
        <button type="button" style={{padding: "5px", margin: "20px", backgroundColor: "white", position: "fixed", left: "88%", top: "5%", fontSize: "20px"}}>Leave Group </button>
        <center><span className="w3-text-white" style={{fontSize: '100px'}}><b>Group Members</b><br/></span> </center>
         
        {/* <button type="button" class="w3-right" style={{padding: "5px", margin: "20px", backgroundColor: "white"}}>Leave Group </button> */}
          
<center> 
         
            
<div className="w3-middle-align" style={{maxWidth: '1400px', maxHeight: '750px', overflow: 'hidden', overflow: 'auto', background: "rgba(46, 49, 49, 0.75)"}}>

        
      {/* Page Container */}
 <div className="w3-content w3-margin-top" style={{maxWidth: '1000px'}}>
        {/* The Grid */}
        <div className="w3-row-padding" style={{}}>

          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          
        </div>
      </div>    
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


        

    </div>
    

);
}