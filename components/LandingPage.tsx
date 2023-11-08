import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; 

const LandingPage = () => {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center max-w-[800px] mx-auto px-4'>
        <div className='flex flex-col items-start justify-start'>
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight ml-2">
                👋 Nice to meet you, I'm
            </h4>
            <h1 className='text-[5rem] md:text-[10rem] font-bold leading-none'>
                Rexan 
            </h1>

            <p className="text-xl text-muted-foreground ml-2 text-yellow-500">
                Student at Hong Kong International School 
                <span className='text-yellow-500'>
                    {" "}by day
                </span>
            </p>
            <p className="text-xl text-muted-foreground ml-2 mt-0.5 text-blue-500">
                Full stack Blockchain & SaaS developer 
                <span className='text-blue-500'>
                    {" "}by night
                </span>
            </p>
            

            <div className='flex flex-row items-start justify-start mt-4'>
                <a href='https://github.com/RexanWONG' target='_blank' rel='noopener noreferrer' aria-label='Github'>
                    <FaGithub className='text-4xl mx-2 hover:text-gray-700 transition-colors'/>
                </a>
                <a href='https://www.linkedin.com/in/rexanwong' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                    <FaLinkedin className='text-4xl mx-2 hover:text-gray-700 transition-colors'/>
                </a>
                <a href='https://twitter.com/rexan_wong' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                    <FaTwitter className='text-4xl mx-2 hover:text-gray-700 transition-colors'/>
                </a>
                <a href='https://www.linkedin.com/in/rexanwong' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                    <FaInstagram className='text-4xl mx-2 hover:text-gray-700 transition-colors'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default LandingPage;
