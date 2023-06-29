import React from 'react'
import DH from '../images/DH.png'
import iconFacebook from '../images/ico-facebook.png'
import iconInstagram from '../images/ico-instagram.png'
import iconTiktok from '../images/ico-tiktok.png'
import iconWhatsapp from '../images/ico-whatsapp.png'
const Footer = () => {
  return (
    <footer>
      
        <p>Powered by</p>
        <img src={DH}alt='DH-logo' />
        
        <div className="iconBox">
          <img className="iconFooter"  src={iconFacebook}alt='fc-logo' />
          <img className="iconFooter"  src={iconInstagram}alt='ig-logo' />
          <img className="iconFooter"  src={iconTiktok}alt='tt-logo' />
          <img className="iconFooter"  src={iconWhatsapp}alt='wh-logo' />
        </div>
    </footer>
  )
}

export default Footer
