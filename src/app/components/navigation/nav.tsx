'use client';
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HamburgerBtn from "../utils/hamburger-btn";
import NavMobile from "./nav-mobile";
import styles from "./nav.module.css";
import SignOutBtn from "./SignOutBtn";
import stylesCopy from './nav-copy.module.css'

type Props = {
    session:Session|null
}

export default function Nav({session}:Props) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
  
    /**
     * Toggles the mobile menu open or close
     * @returns 
     */
    const toggleMobileMenu = () => (setIsMobileOpen(!isMobileOpen));

    return (
      <>
        {/* <nav className={styles.nav}> */}
        <nav className={`z-10 h-24 w-full sticky top-0 flex items-center 
                     justify-between px-3 md:px-12 2xl:px-28 bg-zinc-800 
                     backdrop-filter backdrop-blur-lg bg-opacity-30 transition-opacity`}
        >
            <div className={stylesCopy.navLogo}>
                <Link href='/'>
                    <Image 
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width: '100%', height: 'auto'}}
                        src={'/images/logos/logo.png'}
                        alt='Logo'
                    />
                </Link>
            </div>
          <ul className='hidden md:flex text-base lg:text-xl gap-5 2xl:gap-10'>
            {/* <li>
              <Link href='/feed'>
                <span className='mobile-display'>Feed</span>
                <span className='desktop-display'>News Feed</span>
              </Link>
            </li> */}
            {/* <li>
              <Link href='#experience'>
                <span className='mobile-display'>Upcoming</span>
                <span className='desktop-display'>Upcoming Games</span>
              </Link>
            </li>
            <li>
              <Link href='#projects'>Reviews</Link>
            </li>
            <li>
              <Link href='#contact'>
                <span className='mobile-display'>Topics</span>
                <span className='desktop-display'>User Topics</span>
              </Link>
            </li>
            <li>
              <Link href='#contact'>
                <span className='mobile-display'>Trending</span>
                <span className='desktop-display'>Trending Games</span>
              </Link>
            </li> */}
          </ul>
          <div className="hidden text-base lg:text-xl md:flex gap-5 2xl:gap-10">
            {session ? (
              <>
                <div>Hello, {session.user.name}</div>
                <SignOutBtn />
              </>
            ) : (
              <>
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
              </>
            )}
          </div>
          <HamburgerBtn
            isMobileOpen={isMobileOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </nav>
        <NavMobile
          isMobileOpen={isMobileOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </>
    );
}