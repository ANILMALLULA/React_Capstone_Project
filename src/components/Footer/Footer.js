import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className='main-footer' data-testid='footer'>
      <div className='container'>
        <div className='row'>
          {/* Column1 */}
          <div className='col-8'>
            <h5>Wipro Limited</h5>
            <h6 className='list-unstyled'>
              <li>0123-456-789</li>
              <li>Pune, Maharastra</li>
              <li>INDIA</li>
            </h6>
          </div>
          {/* Column2 */}

          {/* Column3 */}
          <div className='col-4'>
            <h4>Contact details</h4>
            <ul className='list-unstyled'>
              <li>Anil Kumar M</li>
              <li>Andhra Pradesh</li>
              <li>123-456-7899</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} WIPRO LIMITED | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
