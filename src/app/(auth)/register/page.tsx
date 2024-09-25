import React from 'react'
import RegisterForm from './RegisterForm'
import styles from './styles.module.css';
import { FaUserPlus } from 'react-icons/fa6';
import BlgContainer from '@/app/components/utils/containers/BlgContainer';
import FormLogo from '@/app/components/utils/containers/FormLogo';

export default function RegisterPage() {
    return (
        <div className="flex sm:justify-center h-[90vh] sm:pl-2 sm:pr-2 pl-7 pr-7 mt-content mb-7">
            <BlgContainer classes='w-full sm:w-auto'>
                <FormLogo />
                <div className="flex flex-row gap-2 justify-center mb-4">
                    <FaUserPlus className='h-10 w-10' />
                    <h1 className='font-bold text-4xl'>Sign Up</h1>
                </div>
                <RegisterForm/>        
            </BlgContainer>
        </div>    
  )
}
