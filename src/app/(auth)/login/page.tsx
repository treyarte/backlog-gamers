import { Card } from '@mui/material';
import { FaLock } from 'react-icons/fa6';
import LoginForm from './LoginForm';

export default function Loginpage() {
  return (
    <div className='flex justify-center vertical-center pl-2 pr-2 mt-2 items-center'>
        <Card>
            <div className='flex flex-row gap-2 justify-center'>
                <FaLock size={38} />
                <h1 className='font-bold text-4xl'>Login</h1>
            </div>
            <LoginForm />
        </Card>
    </div>
  );
}
