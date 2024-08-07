import React from 'react'
import RegisterForm from './RegisterForm'
import { Card } from '@mui/material'
import styles from './styles.module.css';
import { FaUserPlus } from 'react-icons/fa6';

export default function RegisterPage() {
  return (
    <div className="flex justify-center md:h-[90vh] pl-2 pr-2 mt-2 items-center">
        <Card className={styles.authContainer}>
            <div className="flex flex-row gap-2 justify-center">
                <FaUserPlus size={38} />
                <h1 className='font-bold text-4xl'>Sign Up</h1>
            </div>
            <RegisterForm/>
        </Card>
    </div>    
  )
}
