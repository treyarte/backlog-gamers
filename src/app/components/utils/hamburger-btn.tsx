
import { MobileNavProps } from '@/app/types/props/mobile-nav-props';
import styles from './hamburger-btn.module.css';

export default function HamburgerBtn(props:MobileNavProps) {
    const {isMobileOpen, toggleMobileMenu} = props;

    const getActiveStyle = () => {
        return isMobileOpen ? styles["is-open"] : "";
    }

    return (
        <button onClick={toggleMobileMenu} 
            className={`btn-no-style ${styles.hamburger} ${getActiveStyle()} block md:hidden`}>
            <div className={`${styles.bar}`}></div>
        </button>
    )
}