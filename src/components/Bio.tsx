import React from 'react';
import { FaBirthdayCake, FaCodepen, FaDribbble, FaGithub, FaLinkedin, FaMapMarkerAlt, FaStackOverflow, FaBehance } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

export default function Bio() {
    const getCurrentAge = () => new Date().getFullYear() - 1995;

    return (
        <div className="section dark:bg-zinc-900 h-full flex items-center w-full">
            <div className="bio w-full">
                <div className="container px-4 mx-auto py-10 lg:py-0">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-regal-blue text-6xl lg:text-8xl font-bold leading-none">
                                Hello,<br />I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default">Florin</span>.
                            </h1>
                            <div className="h-0.5 w-16 bg-regal-blue my-4" />
                            <p className="lg:text-xl dark:text-white">full-stack developer</p>
                            <p className="lg:text-xl dark:text-white">node.js, deno, wordpress, js, python and</p>
                            <div className="has-tooltip">
                                <span className="tooltip rounded p-1 bg-gray-100 text-gray-800 text-xs lg:text-base">
                                    <span className="block">React, jQuery, Express.js, TypeORM, Mongoose</span>
                                    <span className="block">MySQL, Redis, MongoDB, RabbitMQ, Strapi, Tailwind</span>
                                    <span className="block">Material UI, Bootstrap, Ant Design, Skeleton</span>
                                    <span className="block">Linux, Docker, Rancher, Apache, Nginx, GIT </span>
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </span>
                                <span className="lg:text-xl dark:text-white underline">more.</span>
                            </div>

                            <div className="mt-4">
                                <span className="block py-2 dark:text-white">
                                    <div className="has-tooltip">
                                        <div className="tooltip rounded p-1 bg-gray-100 text-gray-800">
                                            This year I'm <span>{getCurrentAge()}</span>
                                            <div className="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                        <FaBirthdayCake className="inline-block text-regal-blue text-xl mr-2" />November 17, 1995
                                    </div>
                                </span>
                                <span className="block py-2 dark:text-white">
                                    <FaMapMarkerAlt className="inline-block text-regal-blue text-xl mr-1" /> Rome (Italy) / Remote
                                </span>
                                <span className="block my-6">
                                    <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/florin-cotovanu/" className="pr-4 inline-block"><FaLinkedin className="text-regal-blue text-3xl hover:text-pink-600 transition-colors" /></a>
                                    <a target={"_blank"} rel="noreferrer" href="https://github.com/flc995" className="pr-4 inline-block"><FaGithub className="text-regal-blue text-3xl hover:text-pink-600 transition-colors" /></a>
                                    <a target={"_blank"} rel="noreferrer" href="https://codepen.io/floco" className="pr-4 inline-block"><FaCodepen className="text-regal-blue text-3xl hover:text-pink-600 transition-colors" /></a>
                                    <a target={"_blank"} rel="noreferrer" href="https://stackoverflow.com/users/2487368/floco" className="pr-4 inline-block"><FaStackOverflow className="text-regal-blue text-3xl hover:text-pink-600 transition-colors" /></a>
                                    <a target={"_blank"} rel="noreferrer" href="https://dribbble.com/floco" className="pr-4 inline-block"><FaDribbble className="text-regal-blue text-3xl hover:text-pink-600 transition-colors" /></a>
                                    <a target={"_blank"} rel="noreferrer" href="https://www.behance.net/synthz" className="pr-4 inline-block"><FaBehance className="text-regal-blue text-3xl hover:text-pink-600 transition-colors" /></a>
                                    <a target={"_blank"} rel="noreferrer" href="mailto:flc995@gmail.com" className="pr-4 inline-block"><MdAlternateEmail className="text-regal-blue text-3xl hover:text-pink-600 transition-colors" /></a>
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="!text-[25px] leading-[1.6] text-left dark:text-white">
                                Full-Stack Dev at{' '}
                                <a href="https://weareplanet.com" target="_blank" rel="noreferrer" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 underline decoration-regal-blue hover:decoration-pink-600">Planet</a>
                                {' '}. Creator of{' '}
                                <a href="https://konnichiwapp.com" target="_blank" rel="noreferrer" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 underline decoration-regal-blue hover:decoration-pink-600">Konnichiwapp</a>
                                . Previously Full-Stack Dev at{' '}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default">App to you</span>
                                {' '}(2019 – 2022), Web Dev at{' '}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default">Sportincontro</span>
                                {' '}(2017 – 2018), WordPress Dev at{' '}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default">Dobrain Web Agency</span>
                                {' '}(2016 – 2017), and Web Dev at{' '}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-regal-blue to-pink-600 transition-all hover:to-regal-blue hover:from-pink-600 cursor-default">Weasy Web</span>
                                {' '}(2015).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

