import React from 'react'
import phone from '../../assets/Phone.png';
import email from '../../assets/Email.png';

const ContactCard = () => {
    return (
        <div className='z-50 grid grid-cols-12 px-4 py-4 lg:px-20 lg:py-14 bg-indigo-900 bg-opacity-60 rounded-3xl backdrop-blur-lg justify-center'>
            <div className='col-span-12 md:col-span-12 py-6 lg:py-0 lg:col-span-6'>
                <p className='font-bold text-lg px-2 py-2 text-center lg:text-left'>Get in touch</p>

                <p className='pl-2 px-6 pt-16 lg:pt-0 pb-6 lg:pb-0 text-center lg:text-left'>I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>
                <div className=' px-2 py-10' >
                    <div className='flex flex-wrap justify-start items-center'>
                        <img src={phone} alt='phone'></img><p className='px-6'>9881007962</p>
                    </div>
                    <div className='flex flex-wrap justify-start items-center py-4' >
                        <img className='' src={email} alt='phone'></img>
                        <a href='mailto:jrushi2010@gmail.com'>
                            <p className="px-6">jrushi2010@gmail.com</p>
                        </a>
                    </div>
                </div>

            </div>
            <div className='col-span-12 md:col-span-12 lg:col-span-6'>
                <p className='font-bold text-lg px-2 py-2 text-center lg:text-left'>Send me message</p>
                <div className='px-2 py-5'>
                    <input placeholder='Name' className='px-4 py-1.5 text-white font-normal w-full bg-white bg-opacity-30 rounded-lg shadow justify-start items-start gap-2.5' type='text'></input>
                </div>
                <div className='px-2'>
                    <input placeholder='Email Address' className='px-4 py-1.5 text-white font-normal w-full bg-white bg-opacity-30 rounded-lg shadow justify-start items-start gap-2.5' type='text'></input>
                </div>
                <div className='px-2 py-5'>
                    <input placeholder='Subject' className='px-4 py-1.5 text-white font-normal w-full bg-white bg-opacity-30 rounded-lg shadow justify-start items-start gap-2.5' type='text'></input>
                </div>
                <div className='px-2'>
                    <textarea rows='10' className='px-4 py-1.5 text-white font-normal w-full bg-white bg-opacity-30 rounded-lg shadow justify-start items-start gap-2.5' placeholder='Your Message'></textarea>
                </div>
                <div className='px-2 py-5 text-center lg:text-left'>
                    <button className='px-6 py-2 bg-gradient-to-r from-fuchsia-500 to-blue-800 rounded-lg shadow'>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default ContactCard