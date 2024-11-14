"use client";
import { replaceExcludedSources } from '@/actions/repos/userFeedSettingsRepo';
import { FeedSettingsContext } from '@/app/context/feedSettingsContext';
import { articleSitesEnum } from '@/app/models/enums/articleSitesEnum';
import { Button } from '@nextui-org/button';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { ArticleSource } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { v4 as uuidV4 } from "uuid";
import SourceSettings from '../../feed/customize/SourceSettings';
import { useSession } from 'next-auth/react';


type Props = {
    sources:ArticleSource[];
    excludedSources:articleSitesEnum[];
}

export default function FeedSettingsButton({sources, excludedSources}:Props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [exSites, setExSites] = useState(excludedSources);
    const {data, status} = useSession();
    const router = useRouter();

    const updateExcludedSites = (sites:articleSitesEnum[]) => {
        setExSites(sites);
    }

    useEffect(() => {
        if(status === "unauthenticated") {
            const excludedSources = JSON.parse(localStorage.getItem("excludedSources") ?? "[]");
            setExSites(excludedSources);
        }
    }, [status]);

    /**
     * updates the user's feed settings
     * and refreshes the page
     */
    const handleSubmit = async () => {
        await replaceExcludedSources(exSites);
        // if(status === "authenticated") {
        //     await replaceExcludedSources(exSites);
        // } else {                                
        //         localStorage.setItem("excludedSources", JSON.stringify(exSites));                                        
        // }
        router.refresh();
    }   

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
            <div className="flex flex-col gap-5 max-h-96 overflow-y-auto">
                <FeedSettingsContext.Provider
                    value={{
                        excludedSites:exSites,
                        updateExcludedSites:updateExcludedSites
                    }}
                >
                    <SourceSettings 
                        key={uuidV4()} 
                        sources={sources} 
                        excludedSources={exSites}
                    />
                </FeedSettingsContext.Provider>
                </div>
                    {/* <Tabs 
                    labels={["Sources", "Tags"]} 
                    tabContainers={[
                        <SourceSettings key={uuidV4()} sources={sources} excludedSources={excludedSources}/>,
                        <div key={"444"}>Tags</div>

                    ]}                                   
                /> */}
              </ModalBody>
              <ModalFooter>
                <Button 
                    color="primary" 
                    onPress={handleSubmit}
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
