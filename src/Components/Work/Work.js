import React from 'react'
import background from '../../assets/BG big Circle.png';
import background2 from '../../assets/BG Small Circle.png';
import eclipse from '../../assets/Ellipse 3.png';
import WorkCard from './WorkCard';
import './Work.css';

const Work = () => {
  return (
    <div className='relative mt-[30rem] mb-40 md:mt-[35rem] lg:mt-0 lg:top-[80rem]' >
      <div className='h-screen flex md:flex-none justify-center items-center'>
        <img className='hidden absolute lg:block background-gradient' src={eclipse} alt='background' />
        <img className='hidden absolute lg:block bgImage' src={background2} alt='background' />
        <img className='hidden absolute lg:block bgImage' src={background} alt='background' />
        <div className='lg:absolute m-auto left-0 right-0 flex md:flex-none justify-center'>
          <WorkCard />
        </div>
      </div>

      {/* <div className='bgImage'></div>
      <div className='background-gradient'></div> */}

    </div>
  )
}

export default Work