import React from 'react'
import working from '../../assets/working.png';
import ContactCard from './ContactCard';
import illustation from '../../assets/Illustration.png';
import light from '../../assets/Light Shadow work.png';

const Contact = () => {
  return (
    <div className='relative container top-60 lg:top-[100rem] lg:w-9/12 mx-auto py-96'>
      <div className='absolute z-10 top-24 md:top-16 right-0 lg:top-16'>
        <img className='' src={working} alt='' />
      </div>
      <div className='absolute z-0 right-0 top-0 md:right-0 md:-top-40 lg:-right-44 lg:-top-52'>
        <img className='' src={light} alt='' />
      </div>
      <ContactCard />
      <div className='absolute bottom-20 right-0 md:-bottom-28 lg:top-[30rem] lg:-right-36 -z-10'>
        <img className='w-80 md:w-auto' src={illustation} alt='illustration' />
      </div>
    </div>
  )
}

export default Contact