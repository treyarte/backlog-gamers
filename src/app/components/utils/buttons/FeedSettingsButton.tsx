"use client";

import Tabs from '@/app/test/Tabs';
import { Button } from '@nextui-org/button';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { IoSettingsSharp } from "react-icons/io5";
import SourceSettings from '../../feed/customize/SourceSettings';
import {v4 as uuidV4} from "uuid";
import { ArticleSource } from '@prisma/client';
import { articleSitesEnum } from '@/app/models/enums/articleSitesEnum';

type Props = {
    sources:ArticleSource[];
    excludedSources:articleSitesEnum[];
}

export default function FeedSettingsButton({sources, excludedSources}:Props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    
    return (
        <>
        <Button
            onClick={onOpen}
            endContent={<IoSettingsSharp/>}
            className="w-full max-w-14 sm:max-w-52 py-2 [&&]:bg-[#8e5bdb] [&&]:hover:bg-opacity-90 text-white text-xl
            [&&]:disabled:bg-opacity-70 disabled:cursor-not-allowed"
        >
            <span className='hidden sm:block'>
                Feed Settings
            </span>
        </Button>
        {/* Move to its own component */}
        <Modal
            isOpen={isOpen}
            placement='bottom-center'
            onOpenChange={onOpenChange}
            className='bg-container'            
        >
        <ModalContent>
          {(onClose) => (
            <>
        <ModalHeader className="flex flex-col gap-1 text-xl">Feed Settings</ModalHeader> 
              <ModalBody>
                <Tabs 
                    labels={["Sources", "Tags"]} 
                    tabContainers={[
                        <SourceSettings key={uuidV4()} sources={sources} excludedSources={excludedSources}/>,
                        <div key={"444"}>Tags</div>

                    ]}                                   
                />
              </ModalBody>
              <ModalFooter>
                <Button 
                    color="primary" 
                    onPress={onClose}
                    className=" py-2 [&&]:bg-[#8e5bdb] [&&]:hover:bg-opacity-90 text-white text-xl
                    [&&]:disabled:bg-opacity-70 disabled:cursor-not-allowed"
                >
                  save
                </Button>
            </ModalFooter>
            </>
            )}
        </ModalContent>
        </Modal>
        </>
    )
}   
