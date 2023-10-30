import React, { useState } from 'react';

// import { toggleMenu } from '../utils/buttonUtils';

function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebarMenu ${!isOpen ? 'closed' : ''}`}>
      <div className=" bg-blue-300 text-white hover:bg-blue-400 menu-item p-4 flex items-center space-x-2 border-b" id="menu_item1">
        <img src="./src/assets/images/Exterior_color_icon.png" alt="Exterior_color_icon" className="w-6 h-6" />
        <span className="font-semibold">Model Selection</span>
      </div>
  
      <div className='bg-blue-300 text-white p-4 hover:bg-blue-400 cursor-pointer border-b' id="menu_item2">Exterior Color</div>
      
      <div className="bg-blue-300 text-white p-4 hover:bg-blue-400 cursor-pointer border-b" id="menu_item3">
        Interior Finish
      </div>
      
      <div className="bg-blue-300 text-white p-4 hover:bg-blue-400 cursor-pointer border-b" id="menu_item4">Ramp Door</div>
      <div className="bg-blue-300 text-white p-4 hover:bg-blue-400 cursor-pointer border-b" id="menu_item5">Upgrades</div>
      <div className="bg-blue-300 text-white p-4 hover:bg-blue-400 cursor-pointer border-b" id="menu_item6">Contact Information</div>
      <button className="toggleButton p-2 bg-gray-100 rounded-full hover:bg-gray-200" onClick={toggleMenu}>
        <i className={`fa ${!isOpen ? 'fa-arrow-right' : 'fa-arrow-left'}`} aria-hidden="true"></i>
      </button>

    </div>
  );
  
}




export default SidebarMenu;
