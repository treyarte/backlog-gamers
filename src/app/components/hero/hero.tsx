import styles from "./hero.module.css";
import Image from "next/image"

export default function Hero() {

    return (
        <section >
            <button className="btn-blg">Login</button>
            {/* <div className={styles['hero-img-contn']}>
                <Image 
                    src="/images/hero/hero-desktop.jpg"
                    width={0}
                    height={0} 
                    sizes="100vw"                    
                    alt="Hero Image of a controller"
                />
            </div>
            <div className={styles['hero-cta-contn']}>
                <h1 className={styles.title}>
                Stay up-to-date on the latest gaming news with our <span className={styles.accent}>aggregated</span> news feed.
                </h1>
                <a href="/register" className={styles['btn-cta']}>Sign Up</a>
            </div> */}
        </section>        
    )
}