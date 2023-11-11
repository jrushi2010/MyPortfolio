import React from 'react'
import frame1 from '../../assets/Background-skill.png'
import frame2 from '../../assets/Group 1181.png'
import eclipse from '../../assets/Ellipse 340.png'
import eclipse2 from '../../assets/Ellipse 341.png';
import light from '../../assets/Light Shadow.png';
import './skill.css';

const Skill = () => {
    return (
        <div className='mt-[28rem] lg:mt-40'>
            <div className='relative grid grid-cols-12'>
                <div className='relative lg:absolute bottom-72 lg:top-10 left-0 lg:left-64 z-10 col-span-12 lg:col-span-6 text-center mx-auto'>
                    <p className='font-bold text-2xl text-[#00FFF0] py-6'>Skills</p>
                    <p className='py-2'>UX / UI Design</p>
                    <p className='py-2'>Human Centered Design</p>
                    <p className='py-2'>Design Without Code</p>
                    <p className='py-2'>Illustrations</p>
                    <p className='py-2'>Animations</p>
                    <p className='py-2'>Devlopment</p>
                    <p className='py-2'>HTML and CSS</p>
                </div>
                <div className='absolute -top-36 md:-top-[30rem] lg:-top-44 mx-auto'>
                    <div className='absolute z-0'><img className='bgImage' src={light} alt='' /></div>
                    <div>
                        <img className='bgImage' src={frame1} alt='' />
                    </div>
                    <img className='absolute -bottom-20 md:-bottom-0 lg:relative lg:bottom-52' src={eclipse} alt='' />
                </div>
                <div className='relative px-4 col-span-12 z-10 top-0 mx-auto lg:absolute lg:top-72 lg:right-40 lg:col-span-6 text-center'>
                    <p className='font-bold text-2xl text-[#00FFF0]'>Certifications</p>
                    <div className='py-8'>
                        <ul className='list-none md:list-disc text-left text-2xl'>
                            <li className='py-6'><span className='text-[#8CFF31]'>Imagine XP</span> - Certification <br></br> in UX UI</li>
                            <li><span className='text-[#8CFF31]'>Interaction Design Foundation <br></br> (IxDF)</span>- <br></br> User Experience Beginner's<br></br> Guide.</li>
                        </ul>
                    </div>
                </div>
                <div className='absolute top-[28rem] md:top-40 lg:right-0 lg:top-40'>
                    <img src={frame2} alt='' />
                </div>
                <div className='absolute right-0 top-[50rem] lg:right-20 lg:top-[60rem]'>
                    <img src={eclipse2} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Skill