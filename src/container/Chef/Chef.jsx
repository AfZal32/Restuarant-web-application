import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef_image' />
    </div>
    <div className='app__wrapper_info' >
      <SubHeading title="Chef&apos;s world" />
      <h1 className='headtext__cormorant'>What we belive in </h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote_image' />
          <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui temporibus earum inventore incidunt numquam tempora, corrupti molestiae at delectus aliquam!</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt='sign_image' />
        </div>
      </div>
    </div>
    
  </div>
);

export default Chef;
