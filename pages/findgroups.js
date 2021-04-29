import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Testjs from '../components/testjs'



export default function about() {
    return(
        <div>
        <Head>
            <title>Find groups</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
    <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata" />

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

  </div>

    
            <center><img src="images/TestPage.jpg" style={{opacity: '0.9', width: '100%', maxHeight: '1200px'}} className="w3-margin-top" /></center>
        <div className="w3-display-middle w3-center" style={{width: '50%', height: '85%', Padding: '30px'}}>
              <span className="w3-text-black w3-display-container" style={{fontSize: '120px', padding: '10px'}}>Find Groups<br /></span>
    
    
    <center> 

      <div className="w3-middle-align" style={{maxWidth: '800px', maxHeight: '250px', overflow: 'hidden', overflow: 'auto', padding: '50px'}}>

            <form className="example w3-padding-20" action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit"><i className="fa fa-search" /></button>
            </form>
    
      </div>

    </center> 


        </div>
    
    

            <style jsx>{`
            body {
              font-family: Arial;
            }
            
            * {
              box-sizing: border-box;
            }
            
            form.example input[type=text] {
              padding: 10px;
              font-size: 17px;
              border: 1px solid grey;
              float: left;
              width: 80%;
              background: #f1f1f1;
            }
            
            form.example button {
              float: left;
              width: 20%;
              padding: 10px;
              background: #202020;
              color: white;
              font-size: 17px;
              border: 1px solid grey;
              border-left: none;
              cursor: pointer;
            }
            
            form.example button:hover {
              background: #808080;
            }
            
            form.example::after {
              content: "";
              clear: both;
              display: table;
            }
          `}</style>
    


{/* 
<Testjs/> 
*/}

    
    
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