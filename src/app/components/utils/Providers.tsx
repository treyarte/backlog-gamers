
import { ReactNode } from "react";
import {ToastContainer} from "react-toastify";
import {SessionProvider} from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";

type Props = {
    children:ReactNode;
}

export default function Providers({children}:Props) {
  return (
    <SessionProvider>
        <ToastContainer position="top-left" className="z-50"/>
        {children}
    </SessionProvider>
  )
}
