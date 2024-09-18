import { createContext } from "react";

type ContextType = {
    isOpen:boolean;
    toggleDrawer:() => void;
}

/**
 * The initial context for the drawer
 */
const defaultDrawerContext:ContextType = {
    isOpen: false,
    toggleDrawer: function (): void {
        throw new Error("Function not implemented.");
    }
}

/**
 * Context that holds the Drawer components open or close state
 */
export const DrawerContext = createContext(defaultDrawerContext);