'use client';

import React from 'react'
import styles from './hero.module.css';
import {motion} from 'framer-motion';



export default function NewHero() {
  return (
    <section className='h-screen w-full bg-hero-desktop flex flex-col gap-12 justify-center items-center'>
      <div className={`text-8xl bg-gradient-main ${styles.textCta}`}>Customize Your Feed</div>
      <p className='text-5xl max-w-4xl text-center'>
        Stay up-to-date on the latest gaming news with our aggregated news feed.
      </p>
      <div>
        <button className={`${styles.btnCta} py-2 px-8 text-4xl rounded-md bg-gradient-main hover:bg-gradient-hover`}>Sign Up Today</button>
      </div>
    </section>
  )
}
