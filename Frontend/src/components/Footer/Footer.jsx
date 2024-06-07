import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>Explore a wide variety of restaurants, enjoy special offers, and participate in our loyalty program for exclusive rewards. Discover what makes us the best choice for your food cravings.</p>
               <div className="footer-social-item">
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                 </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>6397660743</li>
                    <li>contact@sitename.com</li>
                </ul>
            </div>
        </div>
         <hr />
         <p className='footer-copyright'>copyright 2024 @ sitename.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
