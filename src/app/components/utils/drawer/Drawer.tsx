import { ReactNode, useContext, useEffect } from "react";
import { DrawerContext } from "./DrawerContext";
import styles from "./DrawerStyles.module.css";
import React from "react";

type Props = {
    children:ReactNode;
}

type DrawerProps = {
    isOpen:boolean;
    toggleDrawer:() => void; //toggles the drawer open or close when ran
} & Props;

/**
 * Panel that slides in and covers the screen
 * See ExampleDrawer for use
 * @param param0 
 * @returns 
 */
const Drawer = ({isOpen, children, toggleDrawer}:DrawerProps) => {
    const overlayCss = isOpen ? styles.open : "";

    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = 'hidden'; //disables the body from being able to scroll
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <>            
            <div onClick={toggleDrawer} className={`${styles.drawerOverlay} ${overlayCss}`}></div>
            <div className={`${styles.drawer} ${overlayCss}`}>
                <DrawerContext.Provider value={{isOpen, toggleDrawer}}>
                    {children}
                </DrawerContext.Provider>
            </div>
        </>
    )
}

/**
 * Component that is used as the header for the Drawer
 * @param param0 
 * @returns 
 */
const Header = ({children}:Props) => {
    const {toggleDrawer} = useContext(DrawerContext);
    return (
        <div className={styles.drawerHeader}>        
            {children}        
            <button onClick={toggleDrawer} className={styles.closeBtn}>Close Icon</button>
        </div>
    )
}

/**
 * Component that displays content in the drawers body
 * @param param0 
 * @returns 
 */
const Body = ({children}:Props) => (
    <div className={styles.drawerBody}>
        {children}
    </div>
)

//Making compounded components
Drawer.Header = Header;
Drawer.Body = Body;

export default Drawer;