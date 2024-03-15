import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/foodtuck.png'
//import {Link} from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        })
    },[])
    
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () =>{
        mobileMenu? setMobileMenu(false): setMobileMenu(true);
    }
  return (
   <nav className={`container ${sticky? 'dark-nav':''}`}>
    <img src={logo} alt='' className='logo'/>
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
<li><a href='/'>Home</a></li>
<li><a href='/menu'>Menu</a></li>
<li><a href='about'>About</a></li>
<li><a href='/faq'>FAQ</a></li>
<li><a href='/contact'><button className='btn'>Contact us</button></a></li>

        {/* <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Pages</Link></li>
        <li><Link to='menu' smooth={true} offset={-260} duration={500}>Menu</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-150} duration={500}>FAQ</Link></li>

        <li><Link to='contact' smooth={true} offset={-150} duration={500}><button className='btn'>Contact us</button></Link></li> */}
       
    </ul>
    <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
   </nav>
  )
}

export default Navbar