import Link from 'next/link'
import Styles from '../index.module.css'

const Tags = () => (
    <tags>


    <div className="w3-container">
                <h5 className="w3-opacity"><b>Favorite tags</b></h5>
                <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>FPS</p>
                </div>

                <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>MMO</p>
                </div>

                <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>JRPG</p>
                </div>

                <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>MMORPG</p>
                </div>

                <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>CASUAL</p>
                </div>

                <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>RACING</p>
                </div>

                <p></p>
              </div>



    </tags>
)

export default Tags