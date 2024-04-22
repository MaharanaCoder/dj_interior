import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">


            {/* <div class="container"> */}
              <a class="navbar-brand" href="#">
                <img src="./images/logodj.png" alt='DJ Interior'  width="65" height="53"/>
                <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold', fontSize: '26px' }}>DJ INTERIOR</Link>
              </a>
            {/* </div> */}

          
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active" to="/" style={{ fontSize: '22px' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ fontSize: '22px' }}>About</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '22px' }}>
                  Furnitures
                </Link>
                <ul className="dropdown-menu">
                  <li className="dropdown-item" to="#">Sofa</li>
                  <li className="dropdown-item" to="#">Bed</li>
                  <li className="dropdown-item" to="#">Dianing Table</li>
                </ul>
              </li> */}
              <li className="nav-item">
              <Link className="nav-link" to="/contactus" style={{ fontSize: '22px' }}>ContactUs</Link>
              </li>
            </ul>
            <div>
          
            </div>
          </div>
          
        </div>
        
      </nav>
      
    </div>

    
  );
}

export default Navbar;
