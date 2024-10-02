'use client'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa6";
import { signIn } from 'next-auth/react';
import { Button } from '@nextui-org/react';

export default function SocialLogin() {
    const onClick = (provider: "google" | "discord") => {
            signIn(provider, {
                callbackUrl: '/'
            })
    }
  return (  
    <div className='flex md:gap-10 gap-4 w-full items-center justify-center'>
            <Button
                isIconOnly
                radius='full'
                aria-label='Google Social Login'
                className='bg-white'
                onClick={() => onClick("google")}
            >
                <FcGoogle size={25} />
            </Button>     
            <Button
                isIconOnly
                radius='full'
                aria-label='Discord Social Login'
                className='bg-white'
                onClick={() => onClick("discord")}
            >
                <FaDiscord size={25} color='#7289da' />                
            </Button>          
    </div>
  )
}
