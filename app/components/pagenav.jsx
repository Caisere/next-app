import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

const PageNav = () => {
    return (
        <ul className='flex gap-5'>
            <li>
                <NavLink href='/'>Home</NavLink>
            </li> 
            <li>
                <NavLink href='/about'>About-us</NavLink>
            </li>
            <li>
                <NavLink href='/users' prefetch={true}>Users</NavLink>    
            </li> 
        </ul>
    )
}

export default PageNav