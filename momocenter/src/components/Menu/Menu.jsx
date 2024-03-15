import React from 'react'
import './Menu.css'
import { chillinobg,plattercombo,spice  } from '../../assets'

const Menu = () => {
  return (
    <div>
    <div className='frontface'></div>
    <div className='menu container'>
        <div className="gallery">
            <div className="programs">
                <div className='program'>
                    <img src={chillinobg} alt=''/>
                    <div className='caption'>
                        <img src={spice} alt=''/>
                        <p>Momo</p>
                    </div>
                </div>
                <div className='program'>
                    <img src={plattercombo} alt=''/>
                    <div className='caption'>
                        <img src={spice} alt=''/>
                        <p>Momo</p>
                    </div>
                </div>
                <div className='program'>
                    <img src={chillinobg} alt=''/>
                    <div className='caption'>
                        <img src={spice} alt=''/>
                        <p>Momo</p>
                    </div>
                </div>
                <div className='program'>
                    <img src={chillinobg} alt=''/>
                    <div className='caption'>
                        <img src={spice} alt=''/>
                        <p>Momo</p>
                    </div>
                </div>
                <div className='program'>
                    <img src={chillinobg} alt=''/>
                    <div className='caption'>
                        <img src={spice} alt=''/>
                        <p>Momo</p>
                    </div>
                </div>
                <div className='program'>
                    <img src={chillinobg} alt=''/>
                    <div className='caption'>
                        <img src={spice} alt=''/>
                        <p>Momo</p>
                    </div>
                </div>
            
        </div>
        </div>
        </div>
        </div>
  )
}

export default Menu