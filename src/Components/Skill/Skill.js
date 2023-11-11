import React from 'react'
import frame2 from '../../assets/Group 1181.png'
import group2 from '../../assets/Background-skill.png';
import eclipse2 from '../../assets/Ellipse 341.png';
import light from '../../assets/Light Shadow.png';
import './skill.css';

const Skill = () => {
    return (
        <div className='mt-[28rem] lg:mt-40'>
            <div className='relative grid grid-cols-12'>
                <div className='relative lg:absolute bottom-72 lg:-top-20 left-0 lg:left-64 z-10 col-span-12 lg:col-span-6 text-center mx-auto'>
                    <p className='text-2xl text-center font-bold text-[#00FFF0] py-8'>Skills</p>
                    <div className='grid text-center lg:text-left grid-cols-6'>
                        <div className='col-span-3'>
                            <ul className='list-none lg:list-disc font-bold'>
                                <li className='py-2'>Java</li>
                                <li className='py-2'>Spring</li>
                                <li className='py-2'>SpringBoot</li>
                                <li className='py-2'>Hibernate</li>
                                <li className='py-2'>NodeJS</li>
                                <li className='py-2'>NextJs</li>
                                <li className='py-2'>ReactJs</li>
                                <li className='py-2'>MySQL</li>
                            </ul>
                        </div>
                        <div className='col-span-3 mx-4'>
                            <ul className='list-none lg:list-disc font-bold'>
                                <li className='py-2'>MongoDB</li>
                                <li className='py-2'>AngularJs</li>
                                <li className='py-2'>JavaScript</li>
                                <li className='py-2'>Typescript</li>
                                <li className='py-2'>Redux</li>
                                <li className='py-2'>HTML and CSS</li>
                                <li className='py-2'>Bootstrap</li>
                                <li className='py-2'>Tailwind Css</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='absolute -top-36 mx-auto left-0 right-0 md:left-0 md:-top-96 lg:-top-52'>
                    <div className='absolute z-0'><img className='bgImage' src={light} alt='' /></div>
                    <img className='bgImage' src={group2} alt='' />
                </div>
                <div className='relative px-4 col-span-12 z-10 -top-20 mx-auto lg:absolute lg:top-72 lg:right-40 lg:col-span-6 text-center'>
                    <p className='font-bold text-2xl text-[#00FFF0]'>Certifications</p>
                    <div className='py-8'>
                        <ul className='list-none lg:list-disc md:text-left text-2xl'>
                            <li className='py-6'><span className='text-[#8CFF31]'>CDAC</span> - <br className='md:hidden block'></br>Postgraduate Diploma<br></br> in Advance Computing</li>
                            <li><span className='text-[#8CFF31]'>ReactJs</span> - <br className='md:hidden block'></br>Namaste React<br></br>Live Course.</li><br></br>
                            <li><span className='text-[#8CFF31]'>Cisco Certified Network Associate<br></br> (CCNA) - </span><br></br>Advanced Technology <br></br>Center Shivaji University.</li>
                        </ul>
                    </div>
                </div>
                <div className='absolute top-[35rem] md:top-40 lg:right-0 lg:top-40'>
                    <img src={frame2} alt='' />
                </div>
                <div className='absolute right-0 top-[60rem] md:top-[55rem] lg:right-20 lg:top-[60rem]'>
                    <img src={eclipse2} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Skill