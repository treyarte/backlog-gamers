import CloseIcon from '@mui/icons-material/Close';
import styles from './panel.module.css';
import { Tab, Tabs } from '@mui/material';

export default function Testpage() {
  return (
    <div className={styles.panel}>
        <div className={styles.panelHeader}>
            <h1 className='h1-dark'>Customize Feed</h1>
            <CloseIcon/>
        </div>
        <div className={styles.panelBody}>
            <div className={styles.tabs}>
                
            </div>
        </div>
    </div>
  )
}
