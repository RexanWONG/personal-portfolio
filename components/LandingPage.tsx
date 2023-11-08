import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

const LandingPage = () => {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center max-w-[800px] mx-auto px-4'>
        <div className='flex flex-col items-start justify-start'>
            <p className='text-4xl ml-2 mb-2 tracking-wider'>
                👋 Nice to meet you, I'm
            </p>
            <h1 className='text-[5rem] md:text-[10rem] font-bold leading-none'>
                Rexan 
            </h1>
            <div className='flex flex-row items-start justify-start mt-4'>
                <a href='https://github.com/RexanWONG' target='_blank' rel='noopener noreferrer' aria-label='Github'>
                    <FaGithub className='text-4xl mx-2 hover:text-gray-700 transition-colors'/>
                </a>
                <a href='https://www.linkedin.com/in/rexanwong' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                    <FaLinkedin className='text-4xl mx-2 hover:text-gray-700 transition-colors'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default LandingPage;