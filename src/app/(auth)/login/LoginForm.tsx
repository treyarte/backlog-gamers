'use client';
import { LoginSchema, loginSchema } from '@/app/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import SocialLogin from '../login/SocialLogin';
import { signInUser } from '@/actions/authActions';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Button, Input } from '@nextui-org/react';

/**
 * Form for handling login
 * @returns 
 */
export default function LoginForm() {
    const router = useRouter();
    const {handleSubmit, register, formState: {errors, isValid, isSubmitting}, setError, getValues} = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode:'onTouched'
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
    <form className='max-w-md w-full flex flex-col flex-wrap gap-7 sm:w-[512px] w-96 ' onSubmit={handleSubmit(onSubmit)}>
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
            
            <Button
                isDisabled={!isValid}
                className={`w-full py-2 [&&]:bg-[#8e5bdb] [&&]:hover:bg-opacity-90 text-white text-xl
                    [&&]:disabled:bg-opacity-70 disabled:cursor-not-allowed`}
                >
                Login
            </Button>
        </div>
        <div className='inline-flex items-center justify-center w-full'>
            <hr className="w-64 h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
            <span className="absolute px-3 font-medium  -translate-x-1/2 bg-container left-1/2 text-white dark:bg-gray-900">More ways to login</span>
        </div>
        <SocialLogin />
    </form>
  )
}
