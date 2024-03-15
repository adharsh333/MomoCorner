import React, { useRef } from 'react'
import './Testimonials.css'
import { nexticon, backicon, user1, user2, user3, user4 } from '../../assets'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
      if(tx > -50){
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
      if(tx < 0){
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'> 
      <img src={nexticon} alt='' className='next-btn' onClick={slideForward}/>
      <img src={backicon} alt='' className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt=''/>
                <div>
                  <h3>Josh Gabel</h3>
                  <span>Local Guide</span>
                </div>
              </div>
              <p>We had a wonderful experience at Momo Corner! It was our first time trying traditional Nepalese dumplings and they did not disappoint. 
                    We had also tried the dessert (Jeri) which was a delicious treat to finish off the meal. The owner was extremely helpful and was very informative. 
                    I would definitely recommend coming here!</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt=''/>
                <div>
                  <h3>Josh Gabel</h3>
                  <span>Local Guide</span>
                </div>
              </div>
              <p>We had a wonderful experience at Momo Corner! It was our first time trying traditional Nepalese dumplings and they did not disappoint. 
                    We had also tried the dessert (Jeri) which was a delicious treat to finish off the meal. The owner was extremely helpful and was very informative. 
                    I would definitely recommend coming here!</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt=''/>
                <div>
                  <h3>Josh Gabel</h3>
                  <span>Local Guide</span>
                </div>
              </div>
              <p>We had a wonderful experience at Momo Corner! It was our first time trying traditional Nepalese dumplings and they did not disappoint. 
                    We had also tried the dessert (Jeri) which was a delicious treat to finish off the meal. The owner was extremely helpful and was very informative. 
                    I would definitely recommend coming here!</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt=''/>
                <div>
                  <h3>Josh Gabel</h3>
                  <span>Local Guide</span>
                </div>
              </div>
              <p>We had a wonderful experience at Momo Corner! It was our first time trying traditional Nepalese dumplings and they did not disappoint. 
                    We had also tried the dessert (Jeri) which was a delicious treat to finish off the meal. The owner was extremely helpful and was very informative. 
                    I would definitely recommend coming here!</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials