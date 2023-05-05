import React from 'react';
import './Footer.css';
import {FooterOverlay,Newsletter} from '../../components'
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import { images } from '../../constants';

const Footer = () => {
return  <div className='app__footer section__padding' id='login'>
    <FooterOverlay/>
    <Newsletter/>
    <div className="app__footer-links">
      <div className='app__footer-links_contact'>
          <h1 className="app__footer-headtext">Contact us</h1>
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="p__opensans">Lorem ipsum dolor sit.</p>
          <p className="p__opensans">Lorem, ipsum dolor.</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="Logo" />
        <p className="p__opensans">Lorem ipsum dolor sit.</p>
        <img src={images.spoon} alt="Spoon" className='spoon__img' style={{marginTop:"15px"}} />
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className='app__footer-links_work'>
          <h1 className="app__footer-headtext">Working hours</h1>
          <p className="p__opensans">Lorem ipsum dolor sit</p>
          <p className="p__opensans">Lorem ipsum dolor</p>
          <p className="p__opensans">Lorem, ipsum</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className='p__opensans'>2023 &copy; made by DreamDevs. all rights reserved.</p>
    </div>
  </div>
}


export default Footer;
 