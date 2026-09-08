import React from 'react';
import { FaBirthdayCake, FaCodepen, FaDribbble, FaGithub, FaLinkedin, FaMapMarkerAlt, FaStackOverflow, FaBehance } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

export default function Bio() {
    const getCurrentAge = () => new Date().getFullYear() - 1995;

    return (
        <div className="section dark:bg-zinc-900 min-h-screen flex items-center w-full py-12 lg:py-0">
            <div className="bio w-full">
                <div className="container px-6 sm:px-8 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h1 className="text-regal-blue text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight lg:leading-none">
                                Hello,<br />I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default">Florin</span>.
                            </h1>
                            <div className="h-0.5 w-16 bg-regal-blue my-4" />
                            <p className="text-base sm:text-xl dark:text-white">full-stack developer</p>
                            <p className="text-base sm:text-xl dark:text-white">node.js, deno, wordpress, js, python and</p>
                            <div className="has-tooltip">
                                <span className="tooltip rounded p-2 bg-gray-100 dark:bg-zinc-800 dark:text-gray-200 text-gray-800 text-xs sm:text-sm lg:text-base max-w-[85vw] sm:max-w-none whitespace-normal sm:whitespace-nowrap shadow-lg">
                                    <span className="block">React, jQuery, Express.js, TypeORM, Mongoose</span>
                                    <span className="block">MySQL, Redis, MongoDB, RabbitMQ, Strapi, Tailwind</span>
                                    <span className="block">Material UI, Bootstrap, Ant Design, Skeleton</span>
                                    <span className="block">Linux, Docker, Rancher, Apache, Nginx, GIT </span>
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </span>
                                <span className="text-base sm:text-xl dark:text-white underline cursor-pointer">more.</span>
                            </div>

                            <div className="mt-6">
                                <span className="block py-1.5 dark:text-white text-base sm:text-lg">
                                    <div className="has-tooltip">
                                        <div className="tooltip rounded p-2 bg-gray-100 dark:bg-zinc-800 dark:text-gray-200 text-gray-800 shadow-lg">
                                            This year I'm <span>{getCurrentAge()}</span>
                                            <div className="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                        <FaBirthdayCake className="inline-block text-regal-blue text-xl mr-2" />November 17, 1995
                                    </div>
                                </span>
                                <span className="block py-1.5 dark:text-white text-base sm:text-lg">
                                    <FaMapMarkerAlt className="inline-block text-regal-blue text-xl mr-1" /> Rome (Italy) / Remote
                                </span>
                                <span className="flex flex-wrap items-center gap-4 my-6">
                                    <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/florin-cotovanu/"><FaLinkedin className="text-regal-blue text-2xl sm:text-3xl hover:text-pink-600 transition-colors" /></a>
                                    <a target={"_blank"} rel="noreferrer" href="https://github.com/flc995"><FaGithub className="text-regal-blue text-2xl sm:text-3xl hover:text-pink-600 transition-colors" /></a>
                                    <a target={"_blank"} rel="noreferrer" href="https://codepen.io/floco"><FaCodepen className="text-regal-blue text-2xl sm:text-3xl hover:text-pink-600 transition-colors" /></a>
                                    <a target={"_blank"} rel="noreferrer" href="https://stackoverflow.com/users/2487368/floco"><FaStackOverflow className="text-regal-blue text-2xl sm:text-3xl hover:text-pink-600 transition-colors" /></a>
                                    <a target={"_blank"} rel="noreferrer" href="https://dribbble.com/floco"><FaDribbble className="text-regal-blue text-2xl sm:text-3xl hover:text-pink-600 transition-colors" /></a>
                                    <a target={"_blank"} rel="noreferrer" href="https://www.behance.net/synthz"><FaBehance className="text-regal-blue text-2xl sm:text-3xl hover:text-pink-600 transition-colors" /></a>
                                    <a target={"_blank"} rel="noreferrer" href="mailto:flc995@gmail.com"><MdAlternateEmail className="text-regal-blue text-2xl sm:text-3xl hover:text-pink-600 transition-colors" /></a>
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="text-lg sm:text-2xl lg:text-[25px] leading-relaxed lg:leading-[1.6] text-left dark:text-white lowercase">
                                full-stack dev at{' '}
                                <a href="https://weareplanet.com" target="_blank" rel="noreferrer" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 underline decoration-regal-blue hover:decoration-pink-600">Planet</a>{' '}, creator of{' '}
                                <a href="https://konnichiwapp.com" target="_blank" rel="noreferrer" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 underline decoration-regal-blue hover:decoration-pink-600">Konnichiwapp</a>{' '}, previously full-stack dev at{' '}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default">app to you</span>
                                {' '}(2019 – 2022), web dev at{' '}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default">sportincontro</span>
                                {' '}(2017 – 2018), wordpress dev at{' '}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default">dobrain web agency</span>
                                {' '}(2016 – 2017), and web dev at{' '}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default">weasy web</span>
                                {' '}(2015).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

