"use client"

import React from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

function NavLink ({active = false, href, children}) {
    const pathName = usePathname()
    const isActive = active ? pathName === href : pathName.startsWith(href) 

    return (
        <Link 
            href={href}
            className={`${isActive ? 'font-semibold text-stone-700' : ''}`}
        >
            {children}
        </Link>
    )
}

export default NavLink