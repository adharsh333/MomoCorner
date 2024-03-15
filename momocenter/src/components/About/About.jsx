import React from 'react'
import './About.css'
import { chillinobg,jholmomonobg } from '../../assets'

const About = () => {
  return (
    <div>
        <div className='frontface'></div>
    <div className='about container'>
        <div className="about-left">
            <img src={chillinobg} alt='' className='about-img'/>
        </div>
        <div className="about-right">
            <h3>About us</h3>
            <h2> We Create the best foody product</h2>
            <p>MO:MO: CORNER was born out of a passion for exceptional food and warm hospitality. With a commitment to using only the freshest, 
                locally-sourced ingredients, our chefs craft each dish with creativity and care, delivering a culinary experience that delights the senses.
                </p>
                <p>Inspired by the rich tapestry of global flavours, our menu offers a diverse selection of dishes to suit every palate. 
                    From traditional favourites to innovative creations, each item on our menu is thoughtfully prepared to showcase the essence of its ingredients.
                    </p>
    </div>
    </div>
    </div>
  )
}

export default About