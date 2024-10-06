'use client'
import { animate, stagger, useAnimate } from 'framer-motion';
import React from 'react'
import { AiFillHeart } from "react-icons/ai";

const randomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const sparklesAmount = 5;
  
type AnimationSequence = Parameters<typeof animate>[0]
export default function AnimatedBtn() {
    const [scope, animate] = useAnimate();

    const onClick = () => {
        const sparkles = Array.from({length:sparklesAmount});
        const sparkleAnimations:AnimationSequence = sparkles.map((_, index) => [
            `.sparkle-${index}`, 
            {
                x: randomNumberBetween(-50, 50),
                y: randomNumberBetween(-50, 50),
                scale: randomNumberBetween(1.5, 1.7),
                opacity: 1
            },
            {
                duration: 0.4,
                at: "<"
            }
        ])

        const sparkleFadeOut:AnimationSequence = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                opacity: 0,
                scale: 0,
            },
            {
                duration: 0.3,
                at: "<"
            }
        ])

        const sparklesReset:AnimationSequence = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                x: 0,
                y: 0,
            },
            {
                duration: 0.000001,                
            }
        ])

        animate([
            ...sparklesReset,
            [".letter", {y: -32}, {duration: 0.2, delay: stagger(0.05)}],
            ["button", {scale: 0.8}, {duration: 0.1, at: "<"}], //Runs at the same time
            ["button", {scale: 1}, {duration: 0.1}],
            ...sparkleAnimations,
            [".letter", {y: 0}, {duration: 0.000001}],
            ...sparkleFadeOut
        ])
    }
    return (
        <div ref={scope}>

        <button onClick={onClick} className=" transition-colors relative text-2xl rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-100 py-2 px-4">
            <span className="sr-only">Motion</span>
            <span aria-hidden className='block overflow-hidden  h-8'>
                {"Motion".split("").map((letter, index) => (
                    <span 
                        data-letter={letter} 
                        className="letter relative inline-block h-8 leading-8 after:absolute 
                        after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]" 
                        key={`${letter}-${index}`}
                    >
                            {letter}
                    </span>
                ))}
            </span>

            <span aria-hidden className="block absolute inset-0 z-10 pointer-events-none">
                {Array.from({length: sparklesAmount}).map((_, index) => (
                    <AiFillHeart key={index} size={10} className={`fill-rose-500 absolute left-1/2 top-1/2 opacity-1 sparkle-${index}`} />
                    // <svg xmlns="http://www.w3.org/2000/svg"
                    //     className={`absolute left-1/2 top-1/2 opacity-1 sparkle-${index}`}
                    //     key={index}
                    //     viewBox="0 0 122 117"
                    //     width="10"
                    //     height="10">
                    //     <path d="M923 283c0 143-160 267-361 431C321 549 162 426 162 283 162 171 252 81 364 81c61 0 118 25 159 66 41-41 98-66 159-66 112 0 202 90 202 202z"/>
                    // </svg>
                    // <svg
                    //     className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
                    //     key={index}
                    //     viewBox="0 0 122 117"
                    //     width="10"
                    //     height="10"
                    // >
                    //     <path
                    //       className="fill-blue-600"
                    //       d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                    //     />
                    // </svg>
                ))}
            </span>
        </button>
        </div>
    )
}   
