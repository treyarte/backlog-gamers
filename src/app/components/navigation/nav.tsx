"use client";
import { useState } from "react";
import styles from "./nav.module.css";
import NavMobile from "./nav-mobile";
import HamburgerBtn from "./utils/hamburger-btn";

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
                    <img                         
                        src="/images/logos/bg-logo-invert.png" 
                        alt="logo" 
                    />
                </a>  
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