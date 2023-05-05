import React from 'react';
import './SpecialMenu.css';
import {images, data} from '../../constants';
import {SubHeading, MenuItem} from '../../components';


const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title={'Menu that fits your palatte'}/>
      <h1 className="headtext__cormorant">Today's special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine,index)=>(
            <MenuItem price={wine.price} title={wine.title} tags={wine.tags} key={index}/>
          ))}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="Menu" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail,index)=>(
            <MenuItem price={cocktail.price} title={cocktail.title} tags={cocktail.tags} key={index}/>
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop:'15px'}}>
      <button type='button' className='custom__button'>View more</button>
    </div>
  </div>
);

export default SpecialMenu;
 