'use client';
import React from 'react'
import styles from './styles.module.css';
import SocialLogin from '../login/SocialLogin';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, registerSchema } from '@/app/schemas/registerSchema';
import { registerUser } from '@/actions/authActions';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Input } from '@nextui-org/react';

export default function RegisterForm() {
    const {handleSubmit, register, formState: {errors, isValid, isSubmitting}, setError, getValues} = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        mode:'onTouched'
    });

    const router = useRouter();

    const onSubmit = async (data:RegisterSchema) => {
        const res = await registerUser(data);
        
        if(res.status === "success") {
            //TODO make page to say that they need to validate  their email
            // router.push("/register/success");
            router.push("/");
            toast.success("Successfully created account");
            return;
        }
            
        toast.error(res.error as string);        
    }

    return (
        <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input
                    isInvalid={!!errors.displayName}
                           
                    
                    label='Display Name'
                    {...register("displayName")}
                />
                <div className={styles.inputError}>{errors.displayName?.message}</div>
            </div>
            <div>
                <Input
                    isInvalid={!!errors.email}
                          
                    
                    label='Email'
                    {...register("email")}
                />
                <div className={styles.inputError}>{errors.email?.message}</div>
            </div>
            <div>
                <Input
                    isInvalid={!!errors.password}
                    label='Password'
                    type='password'
                    {...register("password")}
                />
                <div className={styles.inputError}>{errors.password?.message}</div>
            </div>
            <div>
                <Input
                    isInvalid={!!errors.passwordConfirm}
                    label='Password Confirmation'
                    type='password'
                    {...register("passwordConfirm")}
                />
                <div className={styles.inputError}>{errors.passwordConfirm?.message}</div>
            </div>
            <div className={styles.formBtnContainer}>
                <button 
                    disabled={!isValid}
                    className={`${styles.btnAuth} btn-blg [&&]:bg-black [&&]:hover:bg-opacity-90 
                        [&&]:disabled:bg-opacity-70 disabled:cursor-not-allowed`}
                    >
                    Register
                </button>
            </div>
            <SocialLogin />
        </form>
    )
}
