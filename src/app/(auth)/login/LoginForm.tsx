'use client';
import { LoginSchema, loginSchema } from '@/app/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import SocialLogin from '../login/SocialLogin';
import { signInUser } from '@/actions/authActions';

export default function LoginForm() {
    const {handleSubmit, register, formState: {errors, isValid, isSubmitting}, setError, getValues} = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode:'onTouched'
    });

    const onSubmit = async (data:LoginSchema) => {
        signInUser(data);
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <TextField
                error={!!errors.email}
                sx={{width: '100%'}}        
                variant='outlined'
                label='Email'
                {...register("email")}
            />
            <div>{errors.email?.message}</div>
        </div>
        <div>
            <TextField
                error={!!errors.password}
                sx={{width: '100%'}}        
                variant='outlined'
                label='Password'
                type='password'
                {...register("password")}
            />
            <div>{errors.password?.message}</div>
        </div>
        <div>
            <button 
                disabled={!isValid}
                className={`btn-blg [&&]:bg-black [&&]:hover:bg-opacity-90 
                    [&&]:disabled:bg-opacity-70 disabled:cursor-not-allowed`}
                >
                Login
            </button>
        </div>
        <SocialLogin />
    </form>
  )
}
