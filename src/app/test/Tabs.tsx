import styles from './panel.module.css';
export default function Tabs() {
  return (
    <div>Tabs</div>
  )
}


Tabs.tab1 = (props:{children:React.ReactNode}) => (<button className={styles.tab1}>{props.children}</button>)
Tabs.tab2 = (props:{children:React.ReactNode}) => (<button className={styles.tab2}>{props.children}</button>)
Tabs.tab3 = (props:{children:React.ReactNode}) => (<button className={styles.tab3}>{props.children}</button>)
Tabs.tab4 = (props:{children:React.ReactNode}) => (<button className={styles.tab4}>{props.children}</button>)