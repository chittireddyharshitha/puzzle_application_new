// import React from 'react'
// import { useState } from 'react'
// import {
//     MDBNavbar,
//     MDBContainer,
//     MDBIcon,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBNavbarToggler,
//     MDBNavbarBrand,
//     MDBCollapse
//   } from 'mdb-react-ui-kit';
  
// export default function Navbar() {
//     const [showNavColorThird, setShowNavColorThird] = useState(false);
//   return (
//     <div>
//        <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
//         <MDBContainer fluid>
//           <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
//           <MDBNavbarToggler
//             type='button'
//             data-target='#navbarColor02'
//             aria-controls='navbarColor02'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//             onClick={() => setShowNavColorThird(!showNavColorThird)}
//           >
//             <MDBIcon icon='bars' fas />
//           </MDBNavbarToggler>
//           <MDBCollapse show={showNavColorThird} navbar>
//             <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
//               <MDBNavbarItem className='active'>
//                 <MDBNavbarLink aria-current='page' href='#'>
//                   Home
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>About</MDBNavbarLink>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     </div>
//   )
// }

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import "../styles/contact.css";
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
  
  return (
    <>
    <h1 className="contact_head">WELCOME TO PUZZLE WORLD!</h1>
    <h2 className="contact_head">Click on Game to Start</h2>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            PUZZLE
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Main"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Game 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/About"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact 
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      <div className="bag">
        
      </div>

    </>
  );
}

export default NavBar;