import React from 'react';
import './Chef.css';
import {images} from '../../constants';
import {SubHeading} from '../../components';


const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title={'Chef word'}/>
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="Quote" />
          <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero praesentium corporis ab repudiandae aspernatur sit soluta pariatur incidunt. Maxime, a?</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ex!</p>
      </div>
      <div className="app__chef-sign">
        <p>Michael Bubbles</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="Sign" />
      </div>
    </div>
  </div>
);

export default Chef;
 