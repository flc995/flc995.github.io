import React from 'react';
import { FaMapMarkerAlt, FaGithub, FaCodepen, FaLinkedin, FaStackOverflow, FaBirthdayCake } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'

export default function Ending() {

    return (
        <div className="section dark:bg-zinc-900">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-4">
                    <p className="text-xl dark:text-white text-left">
                        This website was made in React with Jotai library to handle states better. <br/>I used Tailwind CSS framework paired with Flowbite components.<br/> I used full-page.js library to handle the cool page scrolling.  
                    </p>
                </div>
            </div>
        </div>
    );
}
