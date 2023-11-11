import React from 'react'
import design1 from '../../assets/1.png';
import design2 from '../../assets/2.png';
import design3 from '../../assets/3.png';
import d2 from '../../assets/3d 2.png';
import d3 from '../../assets/Comp 38 2.png';

const WorkCard = () => {
    return (
        <div className='flex-none md:flex'>
            <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-12 flex-none lg:col-span-4 lg:flex lg:justify-center lg:items-center'>
                    <div className="relative max-w-xs md:max-w-lg mx-auto lg:absolute lg:z-10 lg:left-40 lg:max-w-sm">
                        <div className="px-11 pt-3 pb-16 bg-white border-none bg-opacity-40 rounded-t-3xl border-2 backdrop-blur-lg justify-center items-center">
                            <div className="grow shrink basis-0 flex justify-center items-center pt-2 pb-2">
                                <img className="py-4 shadow" src={d2} alt='designs' />
                            </div>
                        </div>
                        <div className="w-full py-3.5 left-0 top-[270px] bg-gray-400 bg-opacity-30 rounded-bl-3xl rounded-br-3xl border-none border-opacity-30 justify-center items-center inline-flex">
                            <div className="text-white text-2xl font-bold font-['Poppins'] leading-loose">Designs</div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-4'>
                    <div className="lg:relative lg:z-50 md:max-w-lg max-w-xs mx-auto">
                        <div className="px-11 pt-3 pb-16 bg-cyan-200 border-none bg-opacity-40 rounded-t-3xl border-2 backdrop-blur-lg justify-center items-center">
                            <div className="grow shrink basis-0 flex justify-center items-center">
                                <img className="w-2/6 md:w-32 lg:w-24 py-4 shadow" src={design1} alt='ui design1' />
                                <img className="w-2/6 md:w-40 lg:w-40 md:px-4 shadow" src={design2} alt='ui design2' />
                                <img className="w-2/6 md:w-32 lg:w-24 py-4 shadow" src={design3} alt='ui design3' />
                            </div>
                        </div>
                        <div className="w-full py-3.5 left-0 top-[270px] bg-green-200 bg-opacity-30 rounded-bl-3xl rounded-br-3xl border-none border-opacity-30 justify-center items-center inline-flex">
                            <div className="text-white text-2xl font-bold font-['Poppins'] leading-loose">UI Designs</div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-4 flex-none md:flex justify-center items-center'>
                    <div className="relative max-w-xs mx-auto md:max-w-lg lg:absolute lg:right-40 lg:z-10 lg:max-w-sm">
                        <div className="px-11 pt-3 pb-16 bg-white border-none bg-opacity-40 rounded-t-3xl border-2 backdrop-blur-lg justify-center items-center">
                            <div className="grow shrink basis-0 flex justify-center items-center">
                                <img className="px-0 md:px-6 lg:px-0 py-4 shadow" src={d3} alt='mockups' />
                            </div>
                        </div>
                        <div className="w-full py-3.5 left-0 top-[270px] bg-gray-400 bg-opacity-30 rounded-bl-3xl rounded-br-3xl border-none border-opacity-30 justify-center items-center inline-flex">
                            <div className="text-white text-2xl font-bold font-['Poppins'] leading-loose">Mockups</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard