import { useState } from "react";
import Drawer from "./Drawer";

export default function TestDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => (setIsOpen(!isOpen));

    return (
        <>
        <button onClick={toggleDrawer}>OPEN</button>
        <Drawer
            isOpen={isOpen}
            toggleDrawer={toggleDrawer}
        >
            <Drawer.Header
            >
                <h2>Test Header</h2>
            </Drawer.Header>
            <Drawer.Body                
            >
                Some Content
            </Drawer.Body>            
        </Drawer>
        </>
    )
}