import Head from 'next/head'
import Header from '../components/header'

var i = 1;

export default function hello() {
        return(
            <div>
            <Head>
                <title>This is the login page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <h1>
                This is the Login Page

            </h1>
            <h2>
              <form action="/action_page.php">
              <label htmlFor="fname">First name:</label><br />
              <input type="text" id="fname" name="fname" defaultValue="John" /><br />
              <label htmlFor="lname">Last name:</label><br />
              <input type="text" id="lname" name="lname" defaultValue="Doe" /><br /><br />
              <input type="submit" defaultValue="Submit" />
              </form>
            </h2>
        
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