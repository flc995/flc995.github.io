import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaGithub, FaCodepen, FaLinkedin, FaStackOverflow, FaBirthdayCake } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'
import axios from 'axios'

export default function Bio() {

    const getCurrentAge = () => new Date().getFullYear() - 1995
    const [quote, setQuote] = useState()
    const [author, setAuthor] = useState()
    const [quoteClass, setQuoteClass] = useState('text-lg')

    useEffect(() => {
        const sendGetRequest = async () => {
            try {
                const resp = await axios.get('https://programming-quotes-api.herokuapp.com/Quotes?count=50');
                const respQuote = resp.data[Math.floor(0 + Math.random()*(50 - 1))]
                let toSetQuoteClass = null
                const enQuote = respQuote.en

                if (enQuote.length < 50) {
                    toSetQuoteClass = "lg:text-6xl"
                } else if (enQuote.length < 150) {
                    toSetQuoteClass = "lg:text-5xl"
                } else {
                    toSetQuoteClass = "lg:text-3xl"
                }
                
                setQuoteClass(toSetQuoteClass)
                setQuote(enQuote)
                setAuthor(respQuote.author)

            } catch (err) {
                console.error(err);
            }
        };
        sendGetRequest();
 }, [])

    return (
        <div className="section dark:bg-zinc-900 h-full flex items-center w-full">
            <div className="bio w-full">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div>
                            <h1 className="text-regal-blue text-6xl lg:text-8xl font-bold">Hello,<br />I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default">Florin</span>.</h1>
                            <div className='h-0.5 w-16 bg-regal-blue my-4' />
                            <p className='lg:text-xl dark:text-white'>full-stack developer</p>
                            <p className='lg:text-xl dark:text-white'>node.js, deno, wordpress, js, python and</p>
                            <div className='has-tooltip'>
                                <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-gray-800 text-xs lg:text-base'>
                                    <span className='block'>Linux, React, jQuery, Express.js, TypeORM, Mongoose</span>
                                    <span className='block'>MySQL, Redis, MongoDB, RabbitMQ, Strapi, Tailwind</span>
                                    <span className='block'>Material UI, Bootstrap, Ant Design</span>
                                    <span className='block'> Skeleton, Docker, Rancher, Apache, Nginx, GIT</span>
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </span>
                                <span className='lg:text-xl dark:text-white underline'>more.</span>
                            </div> 
                            
                            
                            
                            <div className='mt-4'>
                                <span className='block py-2 dark:text-white'>
                                    <div className='has-tooltip'>
                                        <div className="tooltip rounded shadow-lg p-1 bg-gray-100   text-gray-800">
                                        This year I'm <span>{getCurrentAge()}</span>
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                        <FaBirthdayCake className='inline-block text-regal-blue text-xl mr-2' />November 17, 1995
                                    </div>
                                    
                                </span>
                                <span className='block py-2 dark:text-white'>
                                    <FaMapMarkerAlt className=' inline-block text-regal-blue text-xl mr-1' /> Rome (Italy) / Remote
                                </span>
                                <span className='block my-6'>
                                    <a target={"_blank"} href="https://www.linkedin.com/in/florin-cotovanu/" className='pr-4 inline-block'><FaLinkedin className='text-regal-blue text-3xl hover:text-pink-600 transition-colors' /></a>
                                    <a target={"_blank"} href="https://github.com/flc995" className='pr-4 inline-block'><FaGithub className='text-regal-blue text-3xl hover:text-pink-600 transition-colors' /></a>
                                    <a target={"_blank"} href="https://codepen.io/floco" className='pr-4 inline-block'><FaCodepen className='text-regal-blue text-3xl hover:text-pink-600 transition-colors' /></a>
                                    <a target={"_blank"} href="https://stackoverflow.com/users/2487368/floco" className='pr-4 inline-block'><FaStackOverflow className='text-regal-blue text-3xl hover:text-pink-600 transition-colors' /></a>
                                    <a target={"_blank"} href="mailto:flc995@gmail.com" className='pr-4 inline-block'><MdAlternateEmail className='text-regal-blue text-3xl hover:text-pink-600 transition-colors' /></a>
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            {quote ? (
                                <div>
                                    <span className={`${quoteClass} font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default`}>
                                        {quote}<br></br><span className='text-base'>{author}</span>
                                    </span>
                                </div>
                            ) : (
                                <div role="status" className="animate-pulse w-full">
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

