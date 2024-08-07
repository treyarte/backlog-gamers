import { Card } from '@mui/material';
import { FaLock } from 'react-icons/fa6';
import LoginForm from './LoginForm';
// .registerContainer,
// .registerForm {
//     display: flex;
//     flex-flow: column wrap;
//     width: 100%;
//     max-width: 700px;
// }
//     .registerContainer {
//         gap: 30px;
//         padding: 20px;
//     }
export default function Loginpage() {
  return (
    <div className='flex justify-center md:h-[90vh] pl-2 pr-2 mt-2 items-center'>
        <Card className='flex flex-col flex-wrap max-w-md w-full gap-8 p-5'>
            <div className='flex flex-row gap-2 justify-center'>
                <FaLock size={38} />
                <h1 className='font-bold text-4xl'>Login</h1>
            </div>
            <LoginForm />
        </Card>
    </div>
  );
}
