import React from 'react'
import './Pages.css'
import { biryaninobg, jholmomonobg, chillinobg, spice } from '../../assets'

const Pages = () => {
  return (
    <div className='programs'> 
        <div className='program'>
            <img alt='' src={biryaninobg}/>
            <div className='caption'>
                <img src={spice} alt=''/>
                <p>Momo</p>
            </div>
        </div>
        <div className='program'>
            <img alt='' src={jholmomonobg} />
            <div className='caption'>
                <img src={spice} alt=''/>
                <p>Momo</p>
            </div>
        </div>
        <div className='program'>
            <img alt='' src={chillinobg} />
            <div className='caption'>
                <img src={spice} alt=''/>
                <p>Momo</p>
            </div>
        </div>

    </div>
  )
}

export default Pages