import React from 'react'
import design from '../../assets/Ilustration design tools.png'
import eclipse from '../../assets/Ellipse 341.png';
import star from '../../assets/Group 1175.png';

const Design = () => {
    return (
        <div className='relative grid grid-cols-12'>
            <div className='relative col-span-12 px-4 top-60 md:left-12 lg:absolute lg:col-span-6 z-10 lg:mt-[26rem] lg:top-80 lg:left-60'>
                <p className='text-2xl text-center font-bold text-[#00FFF0] py-8'>Design Tools</p>
                <div className='grid grid-cols-6'>
                    <div className='ml-0 md:mx-auto col-span-3 mx-auto'>
                        <ul className='list-none md:list-disc font-bold'>
                            <li className='py-2'>Figma</li>
                            <li className='py-2'>Adobe XD</li>
                            <li className='py-2'>Protopie</li>
                            <li className='py-2'>Filmora</li>
                            <li className='py-2'>Webflow</li>
                            <li className='py-2'>Dora</li>
                            <li className='py-2'>Spline</li>
                        </ul>
                    </div>
                    <div className='ml-0 col-span-3'>
                        <ul className='list-none md:list-disc font-bold'>
                            <li className='py-2'>Adobe Creative Suite</li>
                            <li className='py-2'>Canva</li>
                            <li className='py-2'>Zepline</li>
                            <li className='py-2'>VS Code</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='absolute top-80 md:left-20 md:top-40 lg:top-[26rem]'>
                <img src={design} alt='' />
            </div>
            {/* <div className='absolute top-60 right-52 col-span-6'>
                    <img src={star} alt='' />
                </div> */}
        </div>

    )
}

export default Design