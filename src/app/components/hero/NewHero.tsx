'use client';

import React from 'react'
import styles from './hero.module.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {motion} from 'framer-motion';



export default function NewHero() {
  return (
    <section className='h-screen w-full bg-hero-desktop flex flex-col gap-12 justify-center items-center before:content-[""] before:flex-grow'>
      <div className={`text-8xl bg-gradient-main ${styles.textCta}`}>Customize Your Feed</div>
      <p className='text-5xl max-w-4xl text-center'>
        Stay up-to-date on the latest gaming news with our aggregated news feed.
      </p>
      <div>
        <button className={`${styles.btnCta} py-2 px-8 text-4xl rounded-md bg-gradient-main hover:bg-gradient-hover`}>Sign Up Today</button>
      </div>                
      <div className='flex-grow flex items-center'>
        <motion.div
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
          <ArrowDownwardIcon fontSize='large'/>
        </motion.div>
      </div>      

    </section>
  )
}
