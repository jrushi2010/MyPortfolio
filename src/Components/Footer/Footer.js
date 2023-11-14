import React from 'react'
import home from '../../assets/footer/home.svg'
import about from '../../assets/footer/person_outline.svg'
import work from '../../assets/footer/work.svg'
import contact from '../../assets/footer/Vector 189.svg'
import instagram from '../../assets/footer/social media/Instagram.png';
import facebook from '../../assets/footer/social media/Facebook.png';
import twitter from '../../assets/footer/social media/Twitter.png';
import linkedin from '../../assets/footer/social media/Linkedin.png';
import youtube from '../../assets/footer/social media/YouTube.png';
import github from '../../assets/footer/github-mark-white.png';
import whatsapp from '../../assets/footer/social media/whatsapp.png';
import footerimg from '../../assets/6.png';
import './Footer.css';


const Footer = () => {
  return (
    <div className='relative lg:top-[70rem] pb-20 z-0'>
      <div className='absolute left-0 -top-12 md:-top-28 lg:-top-20'>
        <img className='w-28 md:w-52' src={footerimg} alt='' />
      </div>
      <div className='bg-[#1C1C65] z-40 '>
        <div className='grid grid-cols-12 pt-14 lg:pt-32 place-items-center'>
          <div className='col-span-12 md:flex'>
            <div className='flex py-4 md:px-8 hover:text-[#7880FE]'>
              <img className='px-4 text-center' src={home} alt=''></img>
              <a className='cursor-pointer' href='#home'>Home</a>
            </div>
            <div className='flex py-4 md:px-8 hover:text-[#7880FE]'>
              <img className='px-4 text-center' src={about} alt=''></img>
              <a className='cursor-pointer' href='#about'>About me</a>
            </div>
            <div className='flex py-4 md:px-8 hover:text-[#7880FE]'>
              <img className='px-4 text-center' src={work} alt=''></img>
              <a className='cursor-pointer' href='#work'>Work</a>
            </div>
            <div className='flex py-4 md:px-8 hover:text-[#7880FE]'>
              <img className='px-4 text-center' src={contact} alt=''></img>
              <a className='cursor-pointer' href='#contact'>Contact</a>
            </div>

          </div>
        </div>
        <div className=' py-4 lg:py-20 flex justify-center items-center'>
          <a target='_blank' href='https://www.instagram.com/rj_rushikeshjere/?hl=en'><img className='px-2' src={instagram} alt='instagram' /></a>
          <a target='_blank' href='https://www.linkedin.com/in/rushikesh-jere-0170961b6/'><img className='px-2' src={linkedin} alt='linkedin' /></a>
          <a target='_blank' href='https://github.com/jrushi2010'><img className='mx-1 px-2 w-14' src={github} alt='github' /></a>
          <a target='_blank' href=' https://wa.me/9881007962'><img className='px-2 w-14' src={whatsapp} alt='whatsapp' /></a>
        </div>
        <div className='flex justify-center items-center'>
          <hr className='h-0.5 w-2/3 lg:w-[1360px] bg-white bg-opacity-20'></hr><br></br>
        </div>
        <p className='px-2 py-4 text-center lg:text-right text-white text-opacity-70 lg:pr-10'>Copyright © 2023 Rushikesh Jere. All rights reserved.</p>

      </div>

    </div>
  )
}

export default Footer