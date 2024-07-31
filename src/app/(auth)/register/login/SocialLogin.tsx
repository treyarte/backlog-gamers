'use client'
import React from 'react'
import styles from './socialLoginStyles.module.css';
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa6";
import SocialButton from './SocialButton';

export default function SocialLogin() {
    const func = () => {
        
    }
  return (  
    <div className='flex gap-10 w-full'>
        <SocialButton
            handleClick={func}            
        >
            <FcGoogle size={25} />
        </SocialButton>        
        <SocialButton
            handleClick={func}
        >
            <FaDiscord size={25} color='#7289da' />
        </SocialButton>        
    </div>
  )
}
