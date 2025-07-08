import React from 'react';
import Link from 'next/link';

const PageNav = () => {
    return (
        <ul className='flex gap-5'>
            <li>
                <Link href='/'>Home</Link>
            </li> 
            <li>
                <Link href='/about'>About-us</Link>
            </li>
            <li>
                <Link href='/users' prefetch={true}>Users</Link>    
            </li> 
        </ul>
    )
}

export default PageNav