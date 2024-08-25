'use client';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";
import styles from "./customizeFeedStyles.module.css";
import { Dialog, DialogContent, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import SourcesTab from '@/app/test/SourcesTab';
import TagsTab from '@/app/test/TagsTab';
import Tabs from '@/app/test/Tabs';
import {v4 as uuidV4} from 'uuid';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Component for customizes News Sources and Tags
 * @returns 
 */
export default function CustomizeFeed() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDialog = () => (setIsOpen(!isOpen));
  return (
    <>
        <button onClick={() => setIsOpen(!isOpen)} className={`${styles.btnFeed} btn-blg`}>
            <SettingsIcon/>
            Feed Settings
        </button>
        <Dialog
            fullScreen
            open={isOpen}
            onClose={toggleDialog}
            TransitionComponent={Transition}
            
        >
            <DialogTitle
                sx={{backgroundColor: "#212121"}}
                className={styles.panelHeader}
            >                
                <h1 className='h1-dark'>Customize Feed</h1>
                <button onClick={toggleDialog} className="btn-icon">
                    <CloseIcon />
                </button>
                
            </DialogTitle>
            <DialogContent
                sx={{backgroundColor: "#212121"}}
            >
        <div className="mt-5 text-white page-layout">
            <Tabs                 
                labels={["Sources", "Tags"]}
                tabContainers={[
                <SourcesTab key={uuidV4()}/>, 
                <TagsTab key={uuidV4()} />
              ]}
              />
          </div>
          </DialogContent>
      </Dialog>
    </>
  )
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });