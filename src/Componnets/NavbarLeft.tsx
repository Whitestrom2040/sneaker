import React from 'react'
import './Style/NavbarLeft.css'
import sneakers from "../../src/Image/logo.svg";

const NavbarLeft = () => {
  return (
    <>
      <div className='nav-first' >
        <div className='nav-image' >
          <img src={sneakers} alt="" />
        </div>
        <div className='nav-categories' >
          <ul>
            <li>Collections <div className='hover-line' ></div> </li>
            <li>Men <div className='hover-line' ></div> </li>
            <li>Women <div className='hover-line' ></div> </li>
            <li>About <div className='hover-line' ></div> </li>
            <li>Contact <div className='hover-line' ></div> </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavbarLeft