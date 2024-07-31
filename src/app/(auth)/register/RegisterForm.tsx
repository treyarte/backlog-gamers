'use client';
import { TextField } from '@mui/material';
import React from 'react'
import styles from './styles.module.css';
import SocialLogin from './login/SocialLogin';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, registerSchema } from '@/app/schemas/registerSchema';

export default function RegisterForm() {
    const {handleSubmit, register, formState: {errors, isValid, isSubmitting}, setError, getValues} = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        mode:'onTouched'
    });

    const onSubmit = (data:RegisterSchema) => {
        console.info(data)
    }
  return (
    <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
            <TextField
                
                sx={{width: '100%'}}        
                variant='outlined'
                label='Display Name'
                {...register("displayName")}
            />
            <div className={styles.inputError}></div>
        </div>
        <div className={styles.inputContainer}>
            <TextField
                sx={{width: '100%'}}        
                variant='outlined'
                label='Email'
                {...register("email")}
            />
            <div className={styles.inputError}></div>
        </div>
        <div className={styles.inputContainer}>
            <TextField
                sx={{width: '100%'}}        
                variant='outlined'
                label='Password'
                type='password'
                {...register("password")}
            />
            <div className={styles.inputError}></div>
        </div>
        <div className={styles.inputContainer}>
            <TextField
                sx={{width: '100%'}}        
                variant='outlined'
                label='Password Confirmation'
                type='password'
                {...register("passwordConfirm")}
            />
            <div className={styles.inputError}></div>
        </div>
        <div className={styles.formBtnContainer}>
            <button className={`${styles.btnAuth} btn-blg`}>
                Register
            </button>
        </div>
        <SocialLogin />
    </form>
  )
}
