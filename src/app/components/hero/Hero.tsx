'use client';

import React from 'react'
import styles from './hero.module.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {motion} from 'framer-motion';
import { useRouter } from 'next/navigation';


export default function Hero() {
  const router = useRouter();
  return (
    <section className='h-screen w-full bg-hero-desktop flex flex-col md:gap-12 gap-8 
                        justify-center items-center before:content-[""] before:flex-grow
                        px-3 md:px-0
                        '>
      <div className={`text-3xl md:text-5xl xl:text-8xl bg-gradient-main ${styles.textCta}`}>Customize Your Feed</div>
      <p className='text-xl md:text-4xl xl:text-5xl max-w-4xl text-center'>
        Stay up-to-date on the latest gaming news with our aggregated news feed.
      </p>
      <div>
        <button className="py-2 px-8 md:text-2xl xl:text-4xl rounded-md 
                           bg-gradient-main hover:bg-gradient-hover
                            text-xl
                           ">Sign Up Today</button>
      </div>                
      <div className='flex-grow flex items-center'>
        <motion.button
            onClick={() => router.push("/#feed")}          
            animate={{
                y: [0, 20],                
            }}
            transition={{
                repeat: Infinity,
                duration: 1,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
            
        >
          <ArrowDownwardIcon  fontSize='large'/>          
        </motion.button>
      </div>      
    </section>
  )
}
