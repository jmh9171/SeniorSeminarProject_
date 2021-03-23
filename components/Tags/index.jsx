import React from 'react';

function Tag(props){
  return (
    <div className="w3-dark-grey w3-round-large w3-small" style={{width: 'min-content', display: 'inline-block', marginRight: '10px'}} >
                <p style={{display: 'inline', padding: '10px'}}>{props.tag}</p>
    </div>
  );
}

const Tags = () => (
    <tags>


    <div className="w3-container">
                <h5 className="w3-opacity"><b>Favorite tags</b></h5>
                
                <Tag tag="FPS"/>
                <Tag tag="MMO"/>
                <Tag tag="MMORPG"/>
                <Tag tag="CASUAL"/>
                <Tag tag="RACING"/>
                <Tag tag="PUZZLE"/>
                <p></p>

              </div>



    </tags>
)

export default Tags