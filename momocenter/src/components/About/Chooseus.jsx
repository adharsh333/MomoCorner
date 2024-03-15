import React from 'react'
import './About.css'
import { chillinobg,jholmomonobg } from '../../assets'

const Chooseus = () => {
  return (
    <div className='chooseus'>
        <div className="chooseus-left">
        <h3>Why Choose us</h3>
            <h2> Extra ordinary taste And Experience</h2>
            <p>Quality is at the heart of everything we do. From the moment you step through our doors, you'll be greeted by our friendly staff, 
                dedicated to ensuring that your dining experience exceeds expectations. 
                We take pride in providing impeccable service and a welcoming atmosphere, where guests can relax and enjoy every moment.
                    </p>
        </div>
        <div className="chooseus-right">
        <img src={chillinobg} alt='' className='chooseus-img'/>
    </div>
    </div>
  )
}

export default Chooseus