import React from 'react';
import { SubHeading } from '../../components';
import { data,images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title={'Contact'}/>
      <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>
        Find us
      </h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="p__opensans">Lorem, ipsum dolor.</p>
        <p className="p__cormorant" style={{color:'#dcca87',margin:'2rem 0'}}>
          Lorem, ipsum.
        </p>
        <p className="p__opensans">Lorem ipsum dolor sit.</p>
        <p className="p__opensans">Lorem ipsum dolor sit amet.</p>
      </div>
      <button className='custom__button' style={{marginTop:'2rem'}}>Visit</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="FindUS" />
    </div>
  </div>
);

export default FindUs;
