import React from 'react'
import photo from '../../assets/Group 3473.png'
import group from '../../assets/Group 3467.png';
import light from '../../assets/Light Shadow image.png';
import lines from '../../assets/BG Small Circle image.png';
import './about.css';

const About = () => {
  return (
    <div className='container relative'>
      <div className='mt-96 md:mt-[35rem] lg:mt-80'>
        <div className='relative col-span-12 md:py-20 lg:py-0 flex-none md:flex-none lg:flex px-8 items-center justify-center'>
          <div className='absolute'><img className='bgImage' src={light} alt='' /></div>
          <img className='absolute max-w-xs left-0 bottom-96 md:max-w-2xl md:left-10 lg:max-w-4xl lg:left-0 lg:bottom-20 bgImage' src={lines} alt='lines' />
          <img className='z-50' src={photo} alt='me' />
          <div className='py-8 z-50 text-center md:text-center lg:text-left'>
            <h3 className='py-4 font-bold text-xl text-[#3DDCFF]'>About me</h3>
            <p>
              My name is <span className='text-[#00FFF0]'>Shreyas Kulkarni.</span> I'm a <span className='text-[#00FFF0]'>UX/UI Designer</span> and a instrutor based in <span className='text-[#00FFF0]'>Pune.</span> I'm currently working with <span className='text-[#00FFF0]'>InDeft technologies Pvt. Ltd.</span> I think Design lies in between Human & Product, And being an emotional person I love connecting with people emotionally, You got lot of their views & questions too..Thats why I Choose the Design
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