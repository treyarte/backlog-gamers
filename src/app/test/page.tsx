import CloseIcon from '@mui/icons-material/Close';
import styles from './panel.module.css';
import Tabs from './Tabs';
import SourcesTab from './SourcesTab';
import TagsTab from './TagsTab';
import {v4 as uuidV4} from 'uuid';

export default function Testpage() {
  return (
    <div className={styles.panel}>
        <div className={styles.panelHeader}>
            <h1 className='h1-dark'>Customize Feed</h1>
            <CloseIcon/>
        </div>
        <div className={styles.panelBody}>
          <div className="mt-5">
            <Tabs                 
                labels={["Sources", "Tags"]}
                tabContainers={[
                <SourcesTab key={uuidV4()}/>, 
                <TagsTab key={uuidV4()} />
              ]}
              />
          </div>
        </div>
    </div>
  )
}
