import LoginForm from '@/app/(auth)/login/LoginForm';
import { ArticleDto } from '@/app/models/ArticleDto';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react'
import React from 'react'

type Props = {
    isOpenDefault:boolean
}

/**
 * Component for displaying a more detailed view of an article 
 * @returns 
 */
export default function LoginModal({isOpenDefault}:Props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure({isOpen: isOpenDefault});
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            >
                <LoginForm />
        </Modal>
        
    )
}
