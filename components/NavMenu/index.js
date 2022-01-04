import { paths } from '../../context/static'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import tw from 'twin.macro'

import {
    NavMenuWrapper,
    FoxUL,
    FoxLink,
} from './style'


function NavMenu() {

    const [scrollY, setScrollY] = useState(0);
    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

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

    return ( <div tw="m-auto flex justify-center">
        <NavMenuWrapper className = {
            backgroundTransparacy > 0.9 ?
            classNames('bg-primary border-b py-1') :
                'border-b-white border-b bg-white bg-opacity-25 py-5'
        } >
        <div >
        <img src = "img/logo.png"/>
        </div>
        <FoxUL> {
            paths.map(path => ( <li key = { path.url } >
                <Link href = { `#${path.url}` } >
                <FoxLink > { path.title } </FoxLink>
                </Link> </li>
            ))
        }
        </FoxUL>
        </NavMenuWrapper> 
        </div>
    )
}

export default NavMenu