import React, { useRef} from 'react'
import './Navbar.css'
import {BiChevronsDown} from 'react-icons/bi'
import {BiHomeHeart} from 'react-icons/bi'
import {HiBarsArrowDown} from 'react-icons/hi2'
import {RxCross1} from 'react-icons/rx'

// Marsrut linki
import {Link} from 'react-router-dom'


const Navbar = () => {
  // Sticky Navbar ucun js kodu
const stickyNavbarRef = useRef();
window.addEventListener("scroll", function(){
  stickyNavbarRef.current.classList.add("sticky", window.scrollY > 0)
})
 
// Dropdown ucun js kodu
 const dropdownContent = useRef()
const openDropdown = () =>{
dropdownContent.current.classList.toggle('open-dropdown')
}
// kenara basdiqda dropdown baglanir
window.onclick = function(e){
  if (!e.target.matches('.dropdown-button')){
   if(dropdownContent.current.classList.contains('open-dropdown')){
    dropdownContent.current.classList.remove('open-dropdown')
   }
}
}

// overlay menu
 
const overlayMenuRef = useRef()
const openOverlayMenu = () =>{
  overlayMenuRef.current.classList.add('aktiv')
}
const closeOverlayMenu = () => {
  overlayMenuRef.current.classList.remove('aktiv')
}




  return (
    <>
    <div className="navbar-overlay-menu" ref={overlayMenuRef}>
      <RxCross1 className='cross-icon' onClick={closeOverlayMenu} />
      <Link to="/">Home</Link>
      <Link to="/about">About </Link>
      <Link to="/contact">Contact </Link>
      <Link to="/news">News</Link>
      <Link to="/next">Coming Soon</Link>
    </div>
    <div className="navigation-bar" ref={stickyNavbarRef}>
    <div className="logo">
       <a href="#"><img src="http://easybook.kwst.net/images/logo.png" alt="easybook logo"  /></a> 
    </div>
    <a href="#" className='icon-bar' ><HiBarsArrowDown className='bar-icon' onClick={openOverlayMenu}/></a>
    <div className="navigation-links">
      
        <Link to="/"> Home</Link>
        
          <div className='dropdowns'>
            <a href="#" className='dropdown-button' onClick={openDropdown}>Pages <BiChevronsDown className='bottom-arrow'/> </a>
            <div className="dropdown-content " ref={dropdownContent}>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="*">404</Link>
            
            </div>
          </div>
        <Link to="/news">News</Link>
        <Link to="/next">Coming Soon</Link>
        
    </div>
    </div>
    </>
  )
}

export default Navbar