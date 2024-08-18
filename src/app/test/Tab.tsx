import React, { useState } from 'react'
import styles from './panel.module.css';
import { motion } from "framer-motion"


type Props = {
    label:string;
    selectedVal:number;
    currentVal:number
    onTabClick:(n:number) => void;
}

export default function Tab({label, selectedVal, currentVal, onTabClick}:Props) {
    const isSelected = selectedVal === currentVal;
    return (
        <li
            role='tab'
            id={`$tab-${selectedVal}`}
            aria-controls={`panel-${selectedVal}`}
            onClick={() => onTabClick(selectedVal)}
            className="cursor-pointer flex w-full justify-between items-center flex-1 relative p-4 hover:bg-zinc-800 hover:text-zinc-300"
        >
            {isSelected && (
                <motion.div
                    layoutId='underline'            
                    className='absolute z-0 -bottom-0.5 h-0.5 left-0 right-0 bg-default' 
                />
            )}
            <span className={`${isSelected ? "text-default" : "" }`}>
                {label}
            </span>
        </li>
    )
}

// export default function TabTemp() {
//     const [selected, setSelected] = useState(1);
//   return (
//     <ul role='tablist' className='flex border-b-2 border-opacity-15 border-gray-300'>
//     <li
//         role='tab'
//         id='tab-1'
//         aria-controls="panel-1"
//         aria-selected="true"                
//         onClick={() => setSelected(1)} 
//         className="flex w-full justify-between items-center flex-1 relative p-4 hover:bg-zinc-800 hover:text-zinc-300">
//     {
//         selected === 1 && (
//             <motion.div
//             layoutId='underline'            
//             className='absolute z-0 -bottom-0.5 h-0.5 left-0 right-0 bg-rose-500' 
//         />  
//         )
//     }
//         <div>
//             Photos 
//         </div>
//     </li>
//     <li onClick={() => setSelected(2)} className="flex w-full justify-between items-center flex-1 relative p-4 hover:bg-zinc-800 hover:text-zinc-300">
//     {
//         selected === 2 && (
//             <motion.div
//             layoutId='underline'
//             className='absolute z-0 -bottom-0.5 h-0.5 left-0 right-0 bg-rose-500' 
//         />  
//         )
//     }
//         <div>
//             Photos 
//         </div>
//     </li>
//     <li onClick={() => setSelected(3)} className="flex w-full justify-between items-center flex-1 relative p-4 hover:bg-zinc-800 hover:text-zinc-300">
//     {
//         selected === 3 && (
//             <motion.div
//             layoutId='underline'
//             className='absolute z-0 -bottom-0.5 h-0.5 left-0  right-0 bg-rose-500' 
//         />  
//         )
//     }
//         <div>
//             Photos 
//         </div>
//     </li>
//     </ul>
//   )
// }
