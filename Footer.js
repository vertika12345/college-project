import React from 'react'
import "./Footer.css";
//import CloseIcon from '@mui/icons-material/Close';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>COMPANY</h4>
                        <ul className="list-unstyled">
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>PRODUCTS</h4>
                        <ul className="list-unstyled">
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>ACCOUNTS</h4>
                        <ul className="list-unstyled">
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>

                    {/*Column4 */}
                    <div className="col">
                        <h4>RESOURCES</h4>
                        <ul className="list-unstyled">
                            <li>Webmail</li>
                            <li>Redeem code</li>
                            <li>WHOIS lookup</li>
                            <li>Site map</li>
                            <li>Web templates</li>
                            <li>Email templates</li>
                        </ul>
                    </div> 
                    {/*column5 */}
                    <div className="col">
                        <h4>SUPPORT</h4>
                        <ul className="list-unstyled">
                            <li>Contact us</li>
                            <li>Web chat</li>
                            <li>Open ticket</li>
                        </ul>
                    </div> 
                    {/*column6 */}
                    <div className="col">
                        <h4>SOCIAL</h4>
                        <ul className="list-unstyled">
                        <img className="footerimg" src="https://drive.google.com/uc?id=1L909Gkt5aBXGQ6YUC9WrgF-7aDKBKI9Y" alt="" 
                         width="100%" height="80%"/>
                      
                        </ul>
                    </div> 
                 </div>    
                <hr />

            </div>
        </div>
    
    )
};

export default Footer;
