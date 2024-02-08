import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaGithub, FaCodepen, FaLinkedin, FaStackOverflow, FaBirthdayCake, FaDribbble, FaBehance } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'

interface Quote {
    text: string;
    author: string;
  }

const quotes: Quote[] = [
    { text: "The best way to predict the future is to create it.", author: "Alan Kay" },
    { text: "It's not a bug, it's a feature.", author: "Anonymous" },
    { text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke" },
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "Software is a great combination between artistry and engineering.", author: "Bill Gates" },
    { text: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },
    { text: "The only thing that's impossible is impossibility.", author: "Elon Musk" },
    { text: "The code you write makes you a programmer. The code you delete makes you a good one.", author: "Mario Fusco" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Anonymous" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { text: "The secret to getting ahead is getting started.", author: "Mark Twain" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" }
  ];



export default function Bio() {


    const getCurrentAge = () => new Date().getFullYear() - 1995

    const [quoteClass, setQuoteClass] = useState('text-lg')
    const [author, setAuthor] = useState<string>(""); // Initialize with an empty string
    const [quote, setQuote] = useState<string | undefined>(undefined); // Initialize as undefined
  
    useEffect(() => {

        // Replace the API call with selecting a random quote from the 'quotes' array
        const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomQuoteIndex];
        
    
        let toSetQuoteClass = null;
        const enQuote = randomQuote.text;
    
        if (enQuote.length < 50) {
          toSetQuoteClass = "lg:text-6xl";
        } else if (enQuote.length < 150) {
          toSetQuoteClass = "lg:text-5xl";
        } else {
          toSetQuoteClass = "lg:text-3xl";
        }
    
        setQuoteClass(toSetQuoteClass);
        setQuote(enQuote);
        setAuthor(randomQuote.author);
      }, []);

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
                                    <span className='block'>React, jQuery, Express.js, TypeORM, Mongoose</span>
                                    <span className='block'>MySQL, Redis, MongoDB, RabbitMQ, Strapi, Tailwind</span>
                                    <span className='block'>Material UI, Bootstrap, Ant Design, Skeleton</span>
                                    <span className='block'>Linux, Docker, Rancher, Apache, Nginx, GIT </span>
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
                                    <a target={"_blank"} href="https://dribbble.com/floco" className='pr-4 inline-block'><FaDribbble className='text-regal-blue text-3xl hover:text-pink-600 transition-colors' /></a>
                                    <a target={"_blank"} href="https://www.behance.net/synthz" className='pr-4 inline-block'><FaBehance className='text-regal-blue text-3xl hover:text-pink-600 transition-colors' /></a>
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

