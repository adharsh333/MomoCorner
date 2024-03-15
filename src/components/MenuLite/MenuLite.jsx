import React from 'react'
import './MenuLite.css'
import { darkarrow, chillinobg, plattercombo } from '../../assets'

const MenuLite = () => {
  return (
    <div>
    <div className='menu'>
        <div className="gallery">
            <img src={chillinobg} alt=''/>
            <img src={chillinobg} alt=''/>
            <img src={chillinobg} alt=''/>
            <img src={chillinobg} alt=''/>
        </div>
        <button className='btn'> See more here <img src={darkarrow} alt=''/></button>
        </div>
        </div>
  )
}

export default MenuLite