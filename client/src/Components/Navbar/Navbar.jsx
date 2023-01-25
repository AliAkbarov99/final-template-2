import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className='navbar__left'>
        <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="logo" />
        <span>COURSE</span>
      </div>
      <div className='navbar__middle'>
        <Link to="/">Home</Link>
        <Link to="/add">Add Course</Link>
      </div>
      <div className='navbar__right'>
        <img src="https://preview.colorlib.com/theme/course/images/phone-call.svg" alt="" />
        <span>+43 4566 7788 2457</span>
      </div>
    </div>
  )
}

export default Navbar