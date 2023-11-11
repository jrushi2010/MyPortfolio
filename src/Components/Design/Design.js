import React from 'react'
import design from '../../assets/Ilustration design tools.png'

const Design = () => {
    return (
        <div className='relative grid grid-cols-12'>
            <div className='relative mx-auto col-span-12 px-4 top-60 lg:absolute lg:col-span-6 z-10 lg:mt-[26rem] lg:top-80 lg:left-60'>
                <p className='text-2xl text-center font-bold text-[#00FFF0] py-8'>Devlopment Tools</p>
                <div className='grid grid-cols-12'>
                    <div className='md:mx-auto col-span-6 mx-auto'>
                        <ul className='list-none lg:list-disc font-bold'>
                            <li className='py-2'>Figma</li>
                            <li className='py-2'>Canva</li>
                        </ul>
                    </div>
                    <div className='md:mx-auto col-span-6 mx-auto'>
                        <ul className='list-none lg:list-disc font-bold'>
                            <li className='py-2'>Vs Code</li>
                            <li className='py-2'>Eclipse</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='absolute top-32 md:left-0 md:-top-40 lg:top-[20rem]'>
                <img src={design} alt='' />
            </div>
            {/* <div className='absolute top-60 right-52 col-span-6'>
                    <img src={star} alt='' />
                </div> */}
        </div>

    )
}

export default Design