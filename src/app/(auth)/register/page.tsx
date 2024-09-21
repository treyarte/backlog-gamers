import React from 'react'
import RegisterForm from './RegisterForm'
import styles from './styles.module.css';
import { FaUserPlus } from 'react-icons/fa6';
import BlgContainer from '@/app/components/utils/containers/BlgContainer';
import FormLogo from '@/app/components/utils/containers/FormLogo';

export default function RegisterPage() {
    return (
        <div className="flex justify-center h-[90vh] pl-2 pr-2 mt-2 items-center">
            <BlgContainer>
                <FormLogo />
                <div className="flex flex-row gap-2 justify-center mb-4">
                    <FaUserPlus size={38} />
                    <h1 className='font-bold text-4xl'>Sign Up</h1>
                </div>
                <RegisterForm/>        
            </BlgContainer>
        </div>    
  )
}
