import React, { useEffect, useState } from 'react';
import './Menu.css'
import { chillinobg,plattercombo,spice  } from '../../assets'

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]); // State to store fetched menu items

  useEffect(() => {
    // Fetch menu items from the backend
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://localhost:5000/menu'); // Replace with your backend URL
        if (!response.ok) throw new Error('Failed to fetch menu items');
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

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
);
};

export default Menu