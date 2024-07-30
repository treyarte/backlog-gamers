import React from 'react'
import styles from './socialLoginStyles.module.css';
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa6";

export default function SocialLogin() {
  return (  
    <div className={styles.socialLogin}>
        <button className='btn-blg'>    
            <FcGoogle size={25} />
        </button>
        <button className='btn-blg'>        
            <FaDiscord size={25} color='#7289da' />
        </button>
    </div>
  )
}
