import BlgContainer from '@/app/components/utils/containers/BlgContainer';
import Image from "next/image";
import { FiLogIn } from "react-icons/fi";
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
          <BlgContainer>
          <div className="flex items-center justify-center mb-4">
                <div className="w-11 xl:w-16">
                    <Image
                        width={0}
                        height={0}
                        className="w-11 xl:w-16"
                        sizes='100vw'
                        style={{ width: '100%', height: 'auto' }}
                        src='/images/logos/bg-logo-invert.png'
                        alt='logo'
                    />
                </div>                
            </div>
              <div className='flex flex-row gap-2 justify-center mb-4'>            
                  <FiLogIn size={38} />
                  <h1 className='font-bold text-4xl'>Login</h1>
              </div>
              <LoginForm />
            </BlgContainer>
    </div>
  );
}
