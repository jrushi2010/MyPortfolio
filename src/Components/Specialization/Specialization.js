import React from 'react'
import group from '../../assets/Group 3466.png';
import group2 from '../../assets/Background-skill.png';
import light from '../../assets/Light Shadow.png';
import './special.css';

const Specialization = () => {
    return (
        <div className='relative mt-96'>
            <div className='grid grid-cols-12'>
                <div className='absolute w-1/2 top-72 md:w-1/3 lg:w-auto lg:top-[50rem] mt-60'>
                    <img src={group} alt='' />
                </div>
                {/* <div className='relative col-span-12 mx-auto mt-20 text-center md:text-left lg:absolute lg:right-72 lg:top-[52rem] z-10 lg:mt-0 lg:col-span-6'>
                    <p className='font-bold text-2xl text-[#00FFF0]'>Specialization</p>
                    <ul className='list-none md:list-disc py-8'>
                        <li className='py-2'>User Interface Design</li>
                        <li className='py-2'>User Experience Design</li>
                        <li className='py-2'>Web Design</li>
                        <li className='py-2'>Visual Design</li>
                        <li className='py-2'>Case study</li>
                        <li className='py-2'>Prototyping</li>
                        <li className='py-2'>Typography and Wireframes</li>
                    </ul>
                </div>
                <div className='absolute ml-5 top-48 md:ml-5 md:-top-20 lg:right-0 lg:top-[40rem] lg:col-span-6'>
                    <div className='absolute z-0'><img className='bgImage' src={light} alt='' /></div>
                    <img className='bgImage' src={group2} alt='' />
                </div> */}
            </div>
        </div>
    )
}

export default Specialization