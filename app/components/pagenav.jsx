import React from 'react';
import Link from 'next/link';

const PageNav = () => {
    return (
        <ul className='flex gap-1.5'>
            <li>
                <Link href='/'>Home</Link>
            </li> 
            <li>
                <Link href='/about' prefetch={true}>About-us</Link>
            </li> 
        </ul>
    )
}

export default PageNav