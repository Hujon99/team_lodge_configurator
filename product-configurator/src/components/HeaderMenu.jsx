import React from 'react';

function HeaderMenu() {
//   const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    const menuOverlay = document.querySelector('.menu-overlay');
    menuOverlay.classList.toggle('show');
    setMenuToggle(!menuToggle);
    console.log('Toggle:', menuToggle);

}


  return (
    <div className="headerMenu">
        <img src="./src/assets/images/team-lodge-logo-wht-sm.png" alt="Team Lodge Logo" width="200" height="70" style={{verticalAlign:"middle"}}/>
    </div>
  );
}




export default HeaderMenu;