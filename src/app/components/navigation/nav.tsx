"use client";
import { useState } from "react";
import styles from "./nav.module.css";
import NavMobile from "./nav-mobile";
import HamburgerBtn from "../utils/hamburger-btn";
import Image from "next/image";

export default function Nav() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    /**
     * Toggles the mobile menu open or close
     * @returns 
     */
    const toggleMobileMenu = () => (setIsMobileOpen(!isMobileOpen));

    return (  
        <>
            <nav className={styles.nav}>
                <a className={styles["logo-link"]} href="/">
                    <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} 
                        src="/images/logos/bg-logo-invert.png" 
                        alt="logo" 
                    />
                </a>
                <ul className={styles["nav-links"]}>
                    <li>
                        <a 
                            onClick={toggleMobileMenu} 
                            href="#about"
                        >
                            <span className="mobile-display">Feed</span>
                            <span className="desktop-display">News Feed</span>                            
                        </a>
                    </li>
                    <li>
                        <a 
                            onClick={toggleMobileMenu} 
                            href="#experience"
                        >
                            <span className="mobile-display">Upcoming</span>
                            <span className="desktop-display">Upcoming Games</span>                              
                        </a>
                    </li>
                    <li>
                        <a 
                            onClick={toggleMobileMenu} 
                            href="#projects"
                        >
                            Reviews
                        </a>
                    </li>
                    <li>
                        <a 
                            onClick={toggleMobileMenu} 
                            href="#contact"
                        >
                            <span className="mobile-display">Topics</span>
                            <span className="desktop-display">User Topics</span>                              
                        </a>
                    </li>
                    <li>
                        <a 
                            onClick={toggleMobileMenu} 
                            href="#contact"
                        >
                            <span className="mobile-display">Trending</span>
                            <span className="desktop-display">Trending Games</span>                              
                        </a>
                    </li>
                </ul>
                <div className={styles["nav-links"]}>
                    <a 
                        onClick={toggleMobileMenu} 
                        href="#contact"
                    >
                        Login/Sign Up
                    </a>
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
    )
}