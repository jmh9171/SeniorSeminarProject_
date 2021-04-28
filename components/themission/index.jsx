const Themission = () => (
    <themission>
  
            <div className="w3-container">
                    <div className="w3-content" style={{maxWidth: '1100px'}}>
                    <h5 className="w3-center w3-padding-32"><span className="w3-tag w3-grey w3-wide" style={{fontSize: "30px"}}><b>THE MISSION</b></span></h5>

                    
                    <div className="w3-container" id="about">

                        <div>
                            <center><img src="/images/Heart.png" style={{width: '50%', maxWidth: '500px'}} className="w3-margin-top" /></center>
                            <center><h3><p style={{fontSize: "30px"}}><b>Connect with others who have a similar approah to gaming as you!</b></p><br /></h3></center>
                        </div>

                        <div>
                            <center><img src="/images/Profile.png" style={{width: '50%', maxWidth: '1000px'}} className="w3-margin-top" /></center>
                            <center><h3><p style={{fontSize: "30px"}}><b>Customize your profile and Playgroup in a way that works for you.</b></p><br /></h3></center>
                        </div>
                    </div>
                    </div>

        <table border={0} align="center">
        <tbody>
        <tr>
            <th colSpan={3}> <h5 className="w3-center w3-padding-32"><span className="w3-tag w3-grey w3-wide" style={{fontSize: "30px"}}><b>TECHNOLOGIES USED</b></span></h5></th> 
        </tr>
        <tr>  
            <td><p style={{fontSize: "25px"}}><b>Node.js - </b></p></td>
            <td><p style={{fontSize: "25px"}}>Runtime environment</p></td>
            <td><img src="/images/NodePic.jpg" alt="Node.js"height={110} width={180}/></td>
        </tr>
        <tr>
            <td><p style={{fontSize: "25px"}}><b>MySQL - </b></p></td>
            <td><p style={{fontSize: "25px"}}>Database system</p></td>
            <td><img src="/images/SQLPic.jpg" alt="Node.js"height={110} width={180} /></td>
        </tr>
        <tr>
            <td><p style={{fontSize: "25px"}}><b>React - </b></p></td>
            <td><p style={{fontSize: "25px"}}>Front-end framework</p></td>
            <td><img src="/images/ReactPic.jpg" alt="Node.js"height={110} width={180} /></td>
        </tr>
        <tr>
            <td><p style={{fontSize: "25px"}}><b>Next.js - </b> </p></td>
            <td><p style={{fontSize: "25px"}}>Back-end web framework</p></td>
            <td><img src="/images/NextPic.jpg" alt="Node.js"height={110} width={180} /></td>
        </tr>
         
        </tbody></table>



            </div>
  


    </themission>
)

export default Themission