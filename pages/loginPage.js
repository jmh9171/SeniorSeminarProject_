import Head from 'next/head'
import Header from '../components/header'
import db from '../dbTesting'

var i = 1;

export default function hello() {
    
  db.createConnection


        return(
            <div>
            <Head>
                <title>Login page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>


    <h2>Login</h2>
        <form action="/action_page.php" method="post">
          <div className="imgcontainer">
            <img src="/images/blankP.png" alt="Avatar" className="avatar" />
          </div>
          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
            </label>
          </div>
          <div className="container" style={{backgroundColor: '#f1f1f1'}}>
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>

            <style jsx>{`

          /* Bordered form */
          form {
            border: 3px solid #f1f1f1;
          }
          
          /* Full-width inputs */
          input[type=text], input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
          }
          
          /* Set a style for all buttons */
          button {
            background-color: #4c9aaf;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
          }
          
          /* Add a hover effect for buttons */
          button:hover {
            opacity: 0.8;
          }
          
          /* Extra style for the cancel button (red) */
          .cancelbtn {
            width: auto;
            padding: 10px 18px;
            background-color: #f44336;
          }
          
          /* Center the avatar image inside this container */
          .imgcontainer {
            text-align: center;
            margin: 24px 0 12px 0;
          }
          
          /* Avatar image */
          img.avatar {
            width: 10%;
            border-radius: 20%;
          }
          
          /* Add padding to containers */
          .container {
            padding: 16px;
          }
          
          /* The "Forgot password" text */
          span.psw {
            float: right;
            padding-top: 16px;
          }
          
          /* Change styles for span and cancel button on extra small screens */
          @media screen and (max-width: 300px) {
            span.psw {
              display: block;
              float: none;
            }
            .cancelbtn {
              width: 100%;
            }
          }
            

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
            </div>
        );
}