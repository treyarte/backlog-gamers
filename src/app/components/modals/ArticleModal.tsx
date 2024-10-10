import { ArticleDto } from '@/app/models/ArticleDto';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react'
import React from 'react'

type Props = {
    article:ArticleDto
}

/**
 * Component for displaying a more detailed view of an article 
 * @returns 
 */
export default function ArticleModal({article}:Props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <div></div>
        // <Modal
        //     isOpen={isOpen}
        //     onOpenChange={onOpenChange}
        //     >
        // <ModalContent>
        // </ModalContent>
        // </Modal>
        
    )
}
