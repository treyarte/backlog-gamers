"use client";

import { useState } from 'react';
import styles from "./feed-settings.module.css";

const anchor = 'left';

const FeedSettings = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* <button onClick={() => setIsOpen(!isOpen)} className={`${styles["btn-feed"]} btn-blg`}>
                <SettingsIcon/>
                Feed Settings
            </button>
            <Drawer
                open={isOpen}
                anchor={anchor}
            >            
                <div className={styles["feed-settings"]}>
                    <h3 className={`h3-dark ${styles["feed-header"]}`}>
                        <button className={`${styles["btn-drawer-toggle"]} btn-icon`} onClick={() => setIsOpen(!isOpen)}>
                            <ArrowBackIosIcon/>
                        </button>
                        {" "}
                        Feed Settings
                    </h3>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="sites-content"
                            id="sites-header"
                        >
                            News sources
                        </AccordionSummary>
                        <AccordionDetails>
                            
                        </AccordionDetails>
                    </Accordion>
                </div>
                
            </Drawer> */}
        </div>
    )
}

export default FeedSettings;