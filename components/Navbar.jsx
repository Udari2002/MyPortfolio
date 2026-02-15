import {assets} from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'   

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(0)";
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(100%)";
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setIsScroll(true);
            }else{
                setIsScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='Background' className='w-full' loading="eager"/>
    </div>
    
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
     flex items-center justify-between z-50 transition-all duration-500 ${isScroll ? 'bg-white/50 backdrop-blur-lg shadow-sm py-3' : ''}`}>

        <a href="#top">
            <Image src={assets.logo} alt="Logo" className={`w-28 cursor-pointer mr-14 transition-all duration-500 ${isScroll ? 'w-24' : ''}`} />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
        ${isScroll ? "" : 'bg-white/50 backdrop-blur-lg shadow-sm'}`}>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About me</a></li>
            <li><a className='font-Ovo' href="#services">Services</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
            <button>
                <Image src={assets.moon_icon} alt="Dark Mode" className='w-6' />
            </button>

            <a className="hidden lg:flex items-center gap-3 px-10 py-2.5 border
             border-gray-500 rounded-full font-Ovo ml-4" href="#contact">Contact 
             <Image src={assets.arrow_icon} alt="Arrow" className='w-3 transition-transform duration-300 group-hover:rotate-45' /></a>

             <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={assets.menu_black} alt="Menu" className='w-6' />
             </button>
        </div>

        {/*-------------- Mobile Menu - to be implemented----------------- */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt="Close Menu" className='w-5 cursor-pointer' />
            </div>

            <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar