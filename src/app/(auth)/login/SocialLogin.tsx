'use client'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa6";
import SocialButton from './SocialButton';
import { signIn } from 'next-auth/react';

export default function SocialLogin() {
    const onClick = (provider: "google" | "discord") => {
            signIn(provider, {
                callbackUrl: '/'
            })
    }
  return (  
    <div className='flex md:gap-10 gap-4 w-full '>
        <SocialButton
            handleClick={() => onClick("google")}            
        >
            <FcGoogle size={25} />
        </SocialButton>        
        <SocialButton
            handleClick={() => onClick("discord")}
        >
            <FaDiscord size={25} color='#7289da' />
        </SocialButton>        
    </div>
  )
}
