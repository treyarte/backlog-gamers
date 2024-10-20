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
