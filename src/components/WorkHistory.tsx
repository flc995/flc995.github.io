import React from 'react';
import { FaMapMarkerAlt, FaGithub, FaCodepen, FaLinkedin, FaStackOverflow, FaBirthdayCake } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'

export default function WorkHistory() {

    const getCurrentWorkingTime = () => new Date().getFullYear() - 2015

    return (
        <div className="section dark:bg-zinc-900">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col relative self-center">
                    <h2 className="text-regal-blue text-6xl font-bold">Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default">History</span></h2>
                    <div className='h-0.5 w-16 bg-regal-blue my-4' />
                    <p className="text-xl dark:text-white">
                        I've been working in the web development field for {getCurrentWorkingTime()} years.<br/>
                        As soon as I graduated in school I gradually started learning Web and Wordress development for passion.<br/> Today my tasks include creating microservices (Python, Express.js) that communicates with MySQL or Mongo databases or creating custom graphical interfaces or components mainly in React. 
                    </p>
                    </div>
                    <div className='hidden'>
                        <div className="my-2 block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                            <h5 className="text-lg  text-gray-500 font-bold dark:text-white">01/2019 - now</h5>
                            <h5 className="mb-2 text-2xl font-bold  text-regal-blue dark:text-white">App to you <span className='font-normal'>- Full Stack Developer</span></h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">My job is to develop tailored REST APIs solutions. My tasks also include developing and mantaining high-traffik websites.</p>
                        </div>
                        <div className="my-2 block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                            <h5 className="text-lg  text-gray-500 font-bold dark:text-white">11/2017 - 12/2018</h5>
                            <h5 className="mb-2 text-2xl font-bold  text-regal-blue dark:text-white">Sport Incontro <span className='font-normal'>- Web Developer</span></h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">My job was to develop and mantain the store's e-commerce.</p>
                        </div>
                        <div className="my-2 block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                            <h5 className="text-lg  text-gray-500 font-bold dark:text-white">06/2016 - 09/2017</h5>
                            <h5 className="mb-2 text-2xl font-bold  text-regal-blue dark:text-white">DoBrain Web Agency <span className='font-normal'>- Web Developer / Graphic Designer</span></h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">My main task was to mantain a Travel offers aggregator made in Wordpress. Also developed static websites and did graphic works in AI and PS.</p>
                        </div>
                        <div className="my-2 block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                            <h5 className="text-lg  text-gray-500 font-bold dark:text-white">11/2015 - 01/2016</h5>
                            <h5 className="mb-2 text-2xl font-bold  text-regal-blue dark:text-white">Weasy Web Agency <span className='font-normal'>- Web Developer</span></h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">My job was to design and develop custom websites made primarly in HTML/CSS/JS or in Wordpress by creating from-scratch themes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
