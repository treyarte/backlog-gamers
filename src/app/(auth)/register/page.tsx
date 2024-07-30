import React from 'react'
import RegisterForm from './RegisterForm'
import { Card } from '@mui/material'
import styles from './styles.module.css';
import { FaUserPlus } from 'react-icons/fa6';

export default function RegisterPage() {
  return (
    <div className={styles.register}>
        <Card className={styles.registerContainer}>
            <div className="flex flex-row gap-2 ">
                <FaUserPlus size={30} />
                <h1 className='font-bold'>Sign Up</h1>
            </div>
            <RegisterForm/>
        </Card>
    </div>    
  )
}
