'use client';
import { ReactNode, useState } from 'react';
import Tab from './Tab';

type Props = {
    labels:string[];
    tabContainers:ReactNode[];
}

export default function Tabs({labels, tabContainers}:Props) {
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <div>
            <ul role='tablist' className='flex border-b-2 border-opacity-15 border-gray-300'>
                {labels.map((label, index) => (
                    <Tab 
                        key={index} 
                        label={label} 
                        selectedVal={index} 
                        currentVal={currentTab} 
                        onTabClick={setCurrentTab} 
                    />
                ))}
            </ul>
            <div className='mt-5'>
                {tabContainers[currentTab]}
            </div>
      </div>
    
  )
}