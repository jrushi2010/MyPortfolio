import React from 'react'
import photo from '../../assets/Group 3473.png'
import group from '../../assets/Group 3467.png';
import light from '../../assets/Light Shadow image.png';
import lines from '../../assets/BG Small Circle image.png';
import './about.css';

const About = () => {
  return (
    <div className='container relative' id='about' >
      <div className='mt-0 lg:mt-80'>
        <div className='relative col-span-12 md:py-20 lg:py-0 flex-none md:flex-none lg:flex px-8 items-center justify-center'>
          <div className='absolute'><img className='bgImage' src={light} alt='' /></div>
          <img className='absolute max-w-xs mx-auto left-0 right-0 bottom-96 md:max-w-2xl md:left-10 lg:mx-0 lg:max-w-4xl lg:left-0 lg:bottom-20 bgImage' src={lines} alt='lines' />
          <img className='relative z-40 mx-auto left-0 right-0' src={photo} alt='me' />
          <div className='py-8 z-50 text-center md:text-center lg:text-left'>
            <h3 className='py-4 font-bold text-xl text-[#3DDCFF]'>About me</h3>
            <p>
              Hi, I am <span className='text-[#00FFF0]'>Full Stack Developer</span> from India. I enjoy building web applications. I am specialized in frontend development and also have interest in backend development. I have<span className='text-[#00FFF0]'> 1 Year 6 months </span>of experience as a Full Stack Developer. Till now I have developed, maintained and scaled frontend applications. I learn new things on web and build side projects in my spare time.
            </p>
          </div>
        </div>
      </div>
      <div className='absolute right-0 lg:-bottom-60 lg:right-0'>
        <img className='w-36 lg:w-full' src={group} alt='' />
      </div>
    </div >
  )
}

export default About