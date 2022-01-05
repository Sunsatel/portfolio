import { paths } from '../../context/static'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import tw from 'twin.macro'
import {useTheme} from 'next-themes'

import {
    NavMenuWrapper,
    FoxUL,
    FoxLink,
    ResponsivePanel,
    MobileResponsivePanel,
} from './style'

function NavMenu() {
    
    const [toggleMenu, setToggleMenu] = useState(false)
    const [scrollY, setScrollY] = useState(0);
    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
    const {theme, setTheme} = useTheme()
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        let backgroundTransparacyVar = scrollY > document.getElementById('header').clientHeight - 100;
        setBackgroundTransparacy(backgroundTransparacyVar);
    }, [scrollY]);

    const renderNavItems = () => (
        paths.map(path => ( <li key = { path.url } >
            <Link href = { `#${path.url}` }>
            <FoxLink onClick={() => setToggleMenu(!toggleMenu)}> { path.title } </FoxLink>
            </Link> </li>
        ))
    )
    
    return ( <div tw="m-auto flex justify-center">
        <NavMenuWrapper className = {
            backgroundTransparacy > 0.9 ?
            classNames('dark:bg-primary dark:bg-opacity-75 bg-blue-500 bg-opacity-75 border-b py-5') :
                'border-b-white border-b bg-white bg-opacity-25 py-5 dark:bg-secondary'
        } >
        <div>
        <img src = "img/logo.png"/>
        </div>
        <FoxUL> 
        <ResponsivePanel>
            { renderNavItems() }
        </ResponsivePanel>
        
        { toggleMenu &&
            <MobileResponsivePanel>
                { renderNavItems() }
            </MobileResponsivePanel>
        }


        <div>
            <button onClick={() => setTheme(theme==='light' ? 'dark' : 'light')}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800 dark:text-gray-200"
                >
                { theme === 'light' ? <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                    :
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
                }
                </svg>
            </button>
        </div>
        <div className="ml-5 md:hidden">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
                <div className={`h-1 mt-1 bg-white w-7 transition duration-300 ${toggleMenu ? 'rotate-135 top-3' : 'rotate-0'}`}></div>
                <div className="h-1 mt-1 bg-white w-7"></div>
                <div className="h-1 mt-1 bg-white w-7"></div>
            </button>
        </div>
        </FoxUL>
        </NavMenuWrapper> 
        </div>
    )
}

export default NavMenu