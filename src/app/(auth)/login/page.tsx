import BlgContainer from '@/app/components/utils/containers/BlgContainer';
import Image from "next/image";
import { FiLogIn } from "react-icons/fi";
import LoginForm from './LoginForm';
import FormLogo from '@/app/components/utils/containers/FormLogo';
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
    <div className='flex justify-center h-[90vh] pl-2 pr-2 mt-2 items-center'>
        <BlgContainer>
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
