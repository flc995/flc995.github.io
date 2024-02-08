import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Bio from './Bio';
import WorkHistory from './WorkHistory';
import Ending from './Ending';


export default function Fullpage() {
    return (
        <div className='h-full block'>
            <Bio/>
            {/* <WorkHistory/> */}
            {/* <Ending/> */}
        </div>
    );
};