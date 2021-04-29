import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Group from '../components/group'


export default function about() {
return(
    <div>
    <Head>
        <title>My groups</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
<div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata" />
</div>

        <center><img src="images/GroupsBG.jpg" style={{opacity: '0.9', width: '100%', maxHeight: '1200px'}} className="w3-margin-top" /></center>
        <div className="w3-display-middle w3-center" style={{width: '50%', height: '85%'}}>
          <span className="w3-text-white" style={{fontSize: '90px'}}>My Groups<br /></span>
          <center> 
            
  <div className="w3-middle-align" style={{maxWidth: '800px', maxHeight: '550px', overflow: 'hidden', overflow: 'auto', background: "rgba(46, 49, 49, 0.75)"}}>

        

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

    

</center> 

<p style={{fontSize: "50px", color: "white"}}><a href="/creategroup">Create Group</a></p>

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