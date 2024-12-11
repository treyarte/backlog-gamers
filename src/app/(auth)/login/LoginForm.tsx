'use client';
import { LoginSchema, loginSchema } from '@/app/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import SocialLogin from '../login/SocialLogin';
import { signInUser } from '@/actions/authActions';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Button, Input } from '@nextui-org/react';
import HorizontalText from '@/app/utils/HorizontalText';
import SubmitButton from '@/app/components/utils/buttons/SubmitButton';

/**
 * Form for handling login
 * @returns 
 */
export default function LoginForm() {
    const router = useRouter();
    const {handleSubmit, register, formState: {errors, isValid, isSubmitting}, setError, getValues} = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode:'onTouched',
    });


    /**
     * Submit user credentials to our auth actions to check if a user is authenticated
     * @param data 
     */
    const onSubmit = async (data:LoginSchema) => {
        const res = await signInUser(data);
        
        if(res.status === 'success') {
            router.push('/');
            router.refresh();
            toast.success("Successfully signed in");
        } else {
            toast.error(res.error as string);
        }
    }

  return (
    <form className='max-w-md w-full flex flex-col flex-wrap gap-7 sm:w-[512px] w-96 h-auto' onSubmit={handleSubmit(onSubmit)}>
        <div>
            <Input
                isRequired
                label='Email'                
                type="email"                
                isInvalid={!!errors.email}                
                {...register("email")}            
            />
            <div className='input-error'>{errors.email?.message}</div>
        </div>
        <div>
            <Input
                isRequired        
                label='Password'
                type='password'
                isInvalid={!!errors.password}                                
                {...register("password")}
            />
            <div className='input-error'>{errors.password?.message}</div>
        </div>
        <div>
            <SubmitButton 
                text='Login' 
                isDisabled={!isValid} 
            />
        </div>
        <div className='flex justify-between'>
            <div>
                <a className='underline' href="#">Forgot Password?</a>
            </div>
            <div>
                <a className='underline' href="/register">Sign Up</a>
            </div>
        </div>
        <HorizontalText text='More ways to login'/>
        <SocialLogin />
    </form>
  )
}
