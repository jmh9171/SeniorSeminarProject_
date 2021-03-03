import Link from 'next/link'
import Styles from '../index.module.css'
import Tags from './Tags'

const Introduction = () => (
    <introduction>
    
        <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-cube fa-fw w3-margin-right w3-xxlarge w3-text-dark-grey" />Introduction</h2>

              <div className="w3-container">
                <h5 className="w3-opacity"><b>About me</b></h5>
                <p>Blah blah blah I like to play X games for Y reason.  This is a test description and I can't think of anything else to write.  Hopefully this is long enough for my testing purposes.</p>
                <hr />
              </div>


              <Tags/>


        </div>



    </introduction>
)

export default Introduction