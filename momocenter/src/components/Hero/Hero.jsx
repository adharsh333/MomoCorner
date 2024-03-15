import React from 'react'
import './Hero.css'
import Pages from '../Pages/Pages'
import Title from '../../components/Title/Title'
import Chooseus from '../../components/About/Chooseus'
import Testimonials from '../../components/Testimonials/Testimonials'
import MenuLite from '../MenuLite/MenuLite'
import { darkarrow} from '../../assets'

const Hero = () => {
  return (
    <div>
    <div className='hero container'>
        <div className='hero-text'>
            <h1>The Quick & Amusing</h1>
            <p> Come Hungry, Leave Happy... and with a Side of Laughter!!!</p>
            <button className='btn'>Menu
            <img src={darkarrow} alt=''/>
            </button>
        </div>
    </div>
    <div className='container'>
    <Title title='Food Category' subTtile='Choose Food Item'/>
    <Pages/>
    <Chooseus/>
    <Title title='Choose & Pick' subTtile='From our Menu'/>
    <MenuLite/>
    <Title title='Testimonials' subTtile='What our clients are saying'/>
    <Testimonials/>
    </div> 
    </div>
  )
}

export default Hero