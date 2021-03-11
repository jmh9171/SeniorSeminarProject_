import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Loginform from '../components/loginform'


var i = 1;

export default function hello() {

  //   const mysql = require('mysql');
  //   const connection = new Promise((resolve, reject) =>{ 
  //     var conn = mysql.createConnection({
  //         host: 'penguin',
  //         user: 'jmh9171',
  //         password: 'temp!9171',
  //         database: 'jmh9171'
  //         });
  //   connection.connect((err) => {
  //     if (err) throw err;
  //     console.log('Connected!');
  //   });
  // })

    // const connection = mysql.createConnection({
    //   host: 'localhost',
    //   user: 'jmh9171',
    //   password: 'temp!9171',
    //   database: 'jmh9171'
    // });
    // connection.connect((err) => {
    //   if (err) throw err;
    //   console.log('Connected!');
    // });
        return(
            <div>
            <Head>
                <title>Login page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>


    <center><h2>Please log in</h2></center>

          <Loginform />


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