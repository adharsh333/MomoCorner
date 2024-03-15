import React from 'react'
import './MenuLite.css'
import image1 from '../../assets/chillinobg.png'
import dark_arrow from '../../assets/dark-arrow.png'

const MenuLite = () => {
  return (
    <div>
    <div className='menu'>
        <div className="gallery">
            <img src={image1} alt=''/>
            <img src={image1} alt=''/>
            <img src={image1} alt=''/>
            <img src={image1} alt=''/>
        </div>
        <button className='btn'> See more here <img src={dark_arrow} alt=''/></button>
        </div>
        </div>
  )
}

export default MenuLite