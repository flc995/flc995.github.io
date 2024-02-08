import React from 'react';
import Fullpage from './components/FullPage';
import {darkTheme, ThemeSwitcher} from './components/ThemeSwitcher'
import { useAtom } from 'jotai'

function App() {
    const [isDark] = useAtom(darkTheme);

    return (
        <div className={`${isDark ? 'dark' : 'light'} h-full`}>
            <ThemeSwitcher/>
            <Fullpage />
        </div>
    );
}

export default App;
