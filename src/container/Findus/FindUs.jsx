import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FndUs.css';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact " />
      <h1 className="app__header-h1">Find Us</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G </p>
      <p className='p__cormorant' style={{color: '#DCCA87', margin:'2rem 0'}}>Opening Hours</p> 
      <p className='p__opensans'>Mon -  Fri: 10:00 am - 02:00am</p>
      <p className='p__opensans'>Sat -  Sun: 10:00 am - 03:00am</p>
      <button type="button" className="custom__button" style={{marginTop: '2.5rem'}}>Vist Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
