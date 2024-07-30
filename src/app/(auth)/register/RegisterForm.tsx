import { TextField } from '@mui/material'
import React from 'react'
import styles from './styles.module.css';
import SocialLogin from './login/SocialLogin';

export default function RegisterForm() {
  return (
    <form className={styles.registerForm}>
        <div className={styles.inputContainer}>
            <TextField
                error
                sx={{width: '100%'}}        
                variant='outlined'
                label='Display Name'
            />
            <div className={styles.inputError}></div>
        </div>
        <div className={styles.inputContainer}>
            <TextField
                sx={{width: '100%'}}        
                variant='outlined'
                label='Email'
            />
            <div className={styles.inputError}></div>
        </div>
        <div className={styles.inputContainer}>
            <TextField
                sx={{width: '100%'}}        
                variant='outlined'
                label='Password'
            />
            <div className={styles.inputError}></div>
        </div>
        <div className={styles.inputContainer}>
            <TextField
                sx={{width: '100%'}}        
                variant='outlined'
                label='Password Confirmation'
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
