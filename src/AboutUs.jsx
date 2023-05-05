import React from 'react';
import './AboutUs.css';
import {images} from '../../constants';

const AboutUs = () => (
  <div id='about' className='app__aboutus app__bg flex__center section__padding'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt="Spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat qui, eum libero magnam aperiam?</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="Knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt="Spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat qui.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
 