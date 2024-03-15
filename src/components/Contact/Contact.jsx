import React from 'react'
import './Contact.css'
import { messageicon, mailicon, phoneicon, locationicon, darkarrow } from '../../assets'
import { MdLocationOn, MdPhoneIphone, MdEmail  } from 'react-icons/md';

const Contact = () => {
  
        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "d2d9fb74-ad70-4199-ac4b-f065981d6be7");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
  
  
  
    return (
        <div>
        <div className='frontface'></div>
    <div className='contact container'>
        <div className='contact-col'>
            <h3>Send us a message <img src={messageicon} alt=''/></h3>
            <p>Feel free to reach out through contact form. Your feedback is greatly appreciated</p>
            <ul>
                <li><MdEmail className='icons'/> momocorner@momo.com</li>
                <li><MdPhoneIphone className='icons'/>+1 306-307-4662</li>
                <li><MdLocationOn className='icons'/>12445 Lake Fraser Dr SE #426, Calgary, AB T2J 7A4, Canada</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Message here</label>
                <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now<img src={darkarrow} alt=''/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
    </div>
  )
}

export default Contact