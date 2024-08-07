import { MobileNavProps } from "@/app/types/props/mobile-nav-props";
import { useEffect } from "react";
import styles from "./nav-mobile.module.css";
import Link from "next/link";

export default function NavMobile(props:MobileNavProps) {
    const {
        isMobileOpen,
        toggleMobileMenu
    } = props;

    //When active disable scrolling because the menu should be out
    useEffect(() => {
        isMobileOpen ? 
            document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';        
    }, [isMobileOpen]);

    

    /** 
    * Get styles for when the mobile menu is open
    * @returns 
    */
   const getActiveStyle = () => {
       return isMobileOpen ? styles["is-open"] : "";
   }

   return (
    <nav className={`${styles["mobile-nav"]} ${getActiveStyle()}`}>
        <ul className={styles["mobile-nav-links"]}>
            <li>
                <a 
                    onClick={toggleMobileMenu} 
                    href="#about"
                >
                    News Feed
                </a>
            </li>
            <li>
                <a 
                    onClick={toggleMobileMenu} 
                    href="#experience"
                >
                    Upcoming Games
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
                    User Topics
                </a>
            </li>
            <li>
                <a 
                    onClick={toggleMobileMenu} 
                    href="#contact"
                >
                    Trending Games
                </a>
            </li>
            <li>
                <Link
                    onClick={toggleMobileMenu} 
                    href='/register'
                >
                    Sign Up
                </Link>
            </li>
        </ul>
    </nav>
   )
}