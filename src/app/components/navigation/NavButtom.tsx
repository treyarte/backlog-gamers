"use client";
import { useState } from "react";
import styles from "./nav.module.css";
import NavMobile from "./nav-mobile";
import HamburgerBtn from "../utils/hamburger-btn";
import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "@/auth";
import SignOutBtn from "./SignOutBtn";

type Props = {
    session:Session|null
}

export default function NavBottom({session}:Props) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    

    /**
     * Toggles the mobile menu open or close
     * @returns 
     */
    const toggleMobileMenu = () => (setIsMobileOpen(!isMobileOpen));

    return (
      <>
        {/* <nav className={styles.nav}> */}
        <nav className='z-10 h-20 w-full
                    sticky top-0 flex items-center 
                     justify-between px-28'
        >
          <Link className={styles['logo-link']} href='/'>
            <Image
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '70px', height: 'auto' }}
              src='/images/logos/bg-logo-invert.png'
              alt='logo'
            />
            Backlog Gamers
          </Link>
          <ul className={styles['nav-links']}>
            <li>
              <Link href='/feed'>
                <span className='mobile-display'>Feed</span>
                <span className='desktop-display'>News Feed</span>
              </Link>
            </li>
            <li>
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
            </li>
          </ul>
          <div className={styles['nav-links']}>
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