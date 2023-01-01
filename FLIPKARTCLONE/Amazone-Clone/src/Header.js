import React from 'react'
import './Header.css'


function Header() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className='header'>
      <img 
      className="Header__logo"

      src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
  
      <div 
      className="header__search">
         <input className="header__searchInput"
         type="text" />


      </div>
      <div className="header__nav">

      <div className="header__option">
       <span
      className='header__optionLineOne'>Hello Guest</span>
      </div>
      <span className='header__optionLineTwo'>sign In</span> 

      <div className="header__option">
      <span
      className='header__optionLineOne'>Returns</span>
      </div>
      <span className='header__optionLineTwo'>&  Orders</span> 
      
      <div className="header__option">
      <span
      className='header__optionLineOne'>Your</span>
      </div>
      <span className='header__optionLineTwo'>Prime</span> 
      </div>
      
      </div>

  )
}

export default Header;
