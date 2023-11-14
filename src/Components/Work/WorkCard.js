import React from 'react'
import swiggy from '../../assets/work/Group 3483.png';
import youtube from '../../assets/work/Group 3486.png';
import netflix from '../../assets/work/Group 3482.png';
import './Work.css'

const WorkCard = () => {

    const projects = [
        {
            id: 1,
            name: "Food Ordering App",
            description: ['Real time data fetching from Swiggy API.',
                'The Shimmer effect indicates when the data is being loaded.',
                'Lazy loading or code Splitting for enhancing application performance.',
                'State management using React Redux.',
                'Tailwind css for beautigull UI.'],
            github: "https://github.com/jrushi2010/NamasteReact",
            link: "https://cloneswiggy.netlify.app/",
            technologies: ['ReactJs', 'Redux', 'Jest'],
            image: swiggy,
        },
        {
            id: 2,
            name: "Netflix GPT Clone",
            description: ["Authentication: Firebase was employed for user authentication, enhancing the app's security and user experience.",
                "State Management: I harnessed the capabilities of Redux Toolkit (RTK) to manage and maintain the data layer within the application efficiently.",
                "Routing: For seamless navigation, I incorporated react-router-dom for routing purposes.",
                " Data Integration: The app seamlessly integrates with the TMDB API to fetch and display movie data.",
                "Clean Code Practices: To ensure maintainability, I utilized React hooks and created custom hooks, contributing to cleaner and more organized code.",
                "Component Reusability: I designed and built reusable components to enhance code efficiency and promote scalability.",
                " Multi-Language Support: The app features multi-language support, making it accessible to a wider audience.",
                "GPT Search: Leveraging the power of OpenAI APIs, I implemented a natural language search feature using GPT, allowing users to search for movies in a more conversational manner."],
            github: "https://github.com/jrushi2010/NetflixGPT",
            link: "https://gpt-netflix-23.netlify.app/",
            technologies: ['ReactJs', 'Redux', 'Google Firebase', 'Jest'],
            image: netflix,
        },
        {
            id: 3,
            name: "Youtube Clone",
            description: ["Dynamic Content: It offers a vast array of videos, enabling users to enjoy a similar experience to the original YouTube platform.",
                "Seamless Navigation: Powered by React Router DOM, users can effortlessly browse through different pages, explore trending videos, and discover new content.",
                "YouTube APIs Integration: By integrating YouTube APIs, It allows users to search for videos, view detailed video information.",
                "Search Results Caching: My-YouTube intelligently caches search results to enhance performance and minimize API calls, providing lightning-fast search responses",
                "Live Chat:Introduced real-time chat for instant video discussions."],
            github: "https://github.com/jrushi2010/YoutubeClone",
            link: "https://mytube-clone23.netlify.app/",
            technologies: ['ReactJs', 'Redux', 'Youtube API'],
            image: youtube,
        },
    ]

    return (
        <div className=''>
            <p className='font-bold text-3xl text-[#3DDCFF]'>My Recent Work</p>
            {projects.map((project) => (
                <div key={project.id} className='relative grid grid-cols-12 py-20 md:py-20 lg:py-20'>
                    <div className='lg:col-span-2'>
                    </div>
                    <div className='col-span-12 mx-5 px-5 lg:mx-0 lg:col-span-8 lg:px-20 py-4 text-left new-gradient'>
                        <p className='text-[#30FFFF] text-2xl font-bold py-6'>{project.name}</p>
                        <div className='lg:w-2/3'>
                            <h4 className='addlinebreak'>✅ {project.description.join('\n✅')}</h4>
                        </div>
                        <div>
                            <p className='text-[#30FFFF] py-4 font-bold'>Technologies: {project.technologies.join(', ')}</p>
                        </div>
                        <div className='relative lg:absolute flex justify-center items-center top-24 lg:right-0 lg:left-auto lg:-bottom-20 lg:top-auto'>
                            <img className='max-w-xs' src={project.image} alt='' />
                        </div>
                    </div>
                    <div className='lg:col-span-2'>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default WorkCard