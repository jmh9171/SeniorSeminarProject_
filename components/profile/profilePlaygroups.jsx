import Link from 'next/link'
import Styles from '../index.module.css'

const Profileplaygroups = () => (
    <profileplaygroups>
  
  <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-list fa-fw w3-margin-right w3-xxlarge w3-text-dark-grey" />My Playgroups</h2>
              <div className="w3-container">
                
                <h5 className="w3-opacity"><b>Minecraft</b></h5>
                <p><img src="/images/blankP.png" style={{width: '5%'}} alt="Avatar" /><i className="fa fa-fw w3-margin-right" />Super cool MC Playgroup #1</p>

                <p><img src="/images/blankP.png" style={{width: '5%'}} alt="Avatar" /><i className="fa fa-fw w3-margin-right" />MC Playgroup for casuals</p>


                <h5 className="w3-opacity"><b>League of Legends</b></h5>
                <p><img src="/images/blankP.png" style={{width: '5%'}} alt="Avatar" /><i className="fa fa-fw w3-margin-right" />League of Legends fanclub</p>

                <hr />
              </div>
            </div>





    </profileplaygroups>
)

export default Profileplaygroups