'use client';

import { ReactNode } from "react";
import {ToastContainer} from "react-toastify";
import {SessionProvider} from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from "@nextui-org/react";

type Props = {
    children:ReactNode;
}

export default function Providers({children}:Props) {
    return (
        <SessionProvider>
            <NextUIProvider>
                <ToastContainer position="top-left" className="z-50"/>
                {children}
            </NextUIProvider>
        </SessionProvider>
  )
}
