import React from 'react';

function MenuOverlay() {
//   const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    const menuOverlay = document.querySelector('.menu-overlay');
    menuOverlay.classList.toggle('show');
    setMenuToggle(!menuToggle);
    console.log('Toggle:', menuToggle);

}


  return (
    <div className="menuOverlay">
        <div class = "menu-item" id = "menu_item1">
            <img src="./src/assets/images/Exterior_color_icon.png" alt="Exterior_color_icon" width="25" height="25" style={{verticalAlign:"middle"}}/><strong>Model Selection</strong>
            <div>options</div>
        </div>

        <div class = "menu-item" id = "menu_item2">Exterior Color</div>
        <div class = "menu-item" id = "menu_item3">Interior Finish
        <div>options</div>
        </div>
    
    <div class = "menu-item" id = "menu_item4">Ramp Door</div>
    <div class = "menu-item" id = "menu_item5">Upgrades</div>
    <div class = "menu-item" id = "menu_item6">Contact Information</div>
    <button onClick={toggleMenu}>Toggle Menu</button>
    </div>
  );
}




export default MenuOverlay;
