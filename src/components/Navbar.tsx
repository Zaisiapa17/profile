import Link from 'next/link';
import React from 'react'

interface InavItems {
    title: string;
    link: string;
}

const navItems: InavItems[] = [
    { title: 'Home', link: '#' },
    { title: 'Projects', link: '#projects' },
    { title: 'About', link: '#about' },
    { title: 'Contact', link: '#contact' }
]

const Navbar = () => {
    return (
        <nav className='backdrop-blur-sm bg-white/50 dark:bg-black/45 w-full h-14 fixed top-0 border-b-2 border-black/5'>
            <div className='container flex justify-between items-center h-full'>
                <div className="flex">
                    <Link href={'/'} className="text-slate-700 h-full">Webzet.dev</Link>
                </div>
                <div className="hidden sm:flex sm:gap-7">
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.link} className="text-slate-900 hover:text-slate-500 h-full">{item.title}</Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar