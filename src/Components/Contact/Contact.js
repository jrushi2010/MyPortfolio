import React from 'react'
import working from '../../assets/working.png';
import ContactCard from './ContactCard';
import illustation from '../../assets/Illustration.png';
import light from '../../assets/Light Shadow work.png';

const Contact = () => {
  return (
    <div className='relative pb-40 container lg:top-[70rem] lg:w-9/12 md:mx-auto md:py-96' id='contact'>
      <div className='md:absolute mx-5 md:mx-0 top-24 md:top-16 right-0 lg:top-16'>
        <img className='' src={working} alt='' />
      </div>
      <div className='absolute -z-10 right-0 top-0 md:right-0 md:-top-40 lg:-right-44 lg:-top-52'>
        <img className='' src={light} alt='' />
      </div>
      <div className='mx-5 md:mx-0'>
        <ContactCard />
      </div>
      <div className='absolute -bottom-20 right-0 md:-bottom-60 lg:top-[24rem] lg:-right-36 -z-10'>
        <img className='w-80 md:w-auto' src={illustation} alt='illustration' />
      </div>
    </div>
  )
}

export default Contact