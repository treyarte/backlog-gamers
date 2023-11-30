import styles from "./feed-item.module.css";

export default function NewsItem() {

    return (
        <div className={`flex-dual`}>
            <div className={styles["feed-left"]}>
                <img src="https://assets-prd.ignimgs.com/2023/11/29/mercenary-1-1701300675193.jpg" alt="News Image" />
            </div>
            <div className={styles["feed-right"]}>
                <ul className={styles["feed-details"]}>
                    <li>
                        Source: <a href="ign.com">IGN</a>
                    </li>
                    <li>
                        June 4, 2023
                    </li>
                    <li>
                    In a livestream today developer Grinding Gear Games made a slew of announcements, including a first look at a new playable class in its upcoming ARPG Path of Exile 2: the mercenary. 
                    </li>
                </ul>
            </div>
        </div>
    )
}