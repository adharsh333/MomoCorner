import React from 'react'
import './Footer.css'
import {TiSocialInstagram, TiSocialFacebook, TiSocialYoutube, TiSocialTwitter} from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerAbout'>
        <div>
      <h1>Opening Hours</h1>
      <p>
Saturday	11 AM-8 PM<br/>
Sunday	11 AM-5 PM<br/>
Monday	Closed<br/>
Tuesday	Closed<br/>
Wednesday	Closed<br/>
Thursday	11 AM-8 PM<br/>
Friday	11 AM-8 PM<br/>

      </p>
      </div>
      <ul>
        <li className='col1-item1'>About Us</li>
        <li className='col1-item2'>Terms and Services</li>
        <li className='col2-item1'>FAQ</li>
        <li className='col2-item2'> Help</li>
      </ul>
      </div>
    <div className='format'>
        <p>Copyright © 2024 by LLAMA Corp. All Rights Reserved.</p>
        <ul>
            <li><TiSocialFacebook/></li>
            <li><TiSocialInstagram/></li>
            <li><TiSocialTwitter/></li>
            <li><TiSocialYoutube/></li>

        </ul>
        </div>
        </div>
  )
}

export default Footer