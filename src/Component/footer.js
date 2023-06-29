import React from 'react'
import "../Component/footer.css"
import Copyrightfoot from "../asset/mapDestinationImages/copyrightfoot.png"


const footer = () => {
  return (
    <div className='footer-all-component'>






            <br/>
            <br/>
            

            <hr></hr>
            <h6 className="footer1content">
            Jobs service     Nearby service    Business spots     Nearby announcements    Social work team    Native place announcements     Leaders talk    Business news & information    Governments announcements   Business ideas & guidance   International business network

            </h6>
            <h6   className="footer2content">
            Tales     Franchises    Business partnerships   Import & Export deals    Nearby service persons   Ads & offers   Buy & sell product   Investments    Projects & business
               <span>   <a href=""> Privacy policy  </a> <a href="">  Terms of use  </a>  <a href=""> Service policy </a>  <a href="">  cookies policy </a>   <a href=""> license information </a> </span>  
            </h6>

            <h4 className='footer-copy-right'>Copy rights  <span> <img src={Copyrightfoot} alt='' /></span>    Dreams focus limited</h4>
      
    </div>
  )
}

export default footer
