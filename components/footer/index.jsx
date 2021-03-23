import Link from 'next/link'
import Styles from '../'

const Footer = () => (
  <footer className="w3-container w3-black w3-center w3-margin-top">

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
        <p  style={{ fontSize: '25px'}}>Playgroup</p>
        <p  style={{ fontSize: '15px'}}>Find us on social media.</p>
        <i className="fa fa-facebook-official w3-hover-opacity" style={{ padding: '5px'}} />
        <i className="fa fa-instagram w3-hover-opacity" style={{ padding: '5px'}}/>
        <i className="fa fa-twitter w3-hover-opacity" style={{ padding: '5px'}}/>
        <i className="fa fa-linkedin w3-hover-opacity" style={{ padding: '5px'}}/>
        <p></p>

      </div>

     

  </footer>
)

export default Footer
