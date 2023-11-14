import React from 'react'
import background from '../../assets/BG big Circle.png';
import background2 from '../../assets/BG Small Circle.png';
import eclipse from '../../assets/Ellipse 3.png';
import WorkCard from './WorkCard';
import './Work.css';

const Work = () => {
  return (
    <div className='relative mt-[10rem] mb-40 md:mt-[20rem] lg:mt-0 lg:top-[80rem]' id='work'>
      <div className='text-center'>
        <WorkCard />
      </div>
    </div>
  )
}

export default Work