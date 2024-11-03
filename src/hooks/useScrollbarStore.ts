import {create} from "zustand";
import {devtools} from "zustand/middleware";

type ScrollbarState = {
    scrollbarPos:number;
    updateScrollbarPos:(num:number) => void;
}

const useScrollbarStore = create<ScrollbarState>() (
    devtools((set) => ({
        scrollbarPos:0,
        updateScrollbarPos: (num) => set({scrollbarPos:num})
    }), {name: 'scrollbarStore'}));

export default useScrollbarStore;