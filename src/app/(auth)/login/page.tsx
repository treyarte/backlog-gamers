import BlgContainer from '@/app/components/utils/containers/BlgContainer';
import FormLogo from '@/app/components/utils/containers/FormLogo';
import { FiLogIn } from "react-icons/fi";
import LoginForm from './LoginForm';

export default function Loginpage() {
  return (
    <div className='flex sm:justify-center h-[90vh] sm:pl-2 sm:pr-2  mt-content'>
        <BlgContainer classes='w-full sm:w-auto'>
            <FormLogo />
            <div className='flex flex-row gap-2 justify-center mb-4'>            
                <FiLogIn size={38} />
                <h1 className='font-bold text-4xl'>Login</h1>
            </div>
            <LoginForm />
        </BlgContainer>
    </div>
  );
}
