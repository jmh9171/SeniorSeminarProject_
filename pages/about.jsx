import Head from 'next/head'
import Picturehead from '../components/picturehead'
import Aboutplaygroup from '../components/aboutplaygroup'
import Themission from '../components/themission'



export default function about() {
  return (
 

    <div className="bgimg w3-display-container w3-grayscale-min" id="home">
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata" />

        {/* Add a background color and large text to the whole page */}
       
        <div className="w3-grayscale w3-large">
          
          <Picturehead/>
          <Aboutplaygroup />
          <Themission />

          {/* End page content */}

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