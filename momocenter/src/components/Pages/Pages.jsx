import React from 'react'
import './Pages.css'
import image1 from '../../assets/biryaninobg.png'
import image2 from '../../assets/jholmomonobg.png'
import image3 from '../../assets/chillinobg.png'
import image4 from '../../assets/spice.png'


const Pages = () => {
  return (
    <div className='programs'> 
        <div className='program'>
            <img alt='' src={image1}/>
            <div className='caption'>
                <img src={image4} alt=''/>
                <p>Momo</p>
            </div>
        </div>
        <div className='program'>
            <img alt='' src={image2} />
            <div className='caption'>
                <img src={image4} alt=''/>
                <p>Momo</p>
            </div>
        </div>
        <div className='program'>
            <img alt='' src={image3} />
            <div className='caption'>
                <img src={image4} alt=''/>
                <p>Momo</p>
            </div>
        </div>

    </div>
  )
}

export default Pages