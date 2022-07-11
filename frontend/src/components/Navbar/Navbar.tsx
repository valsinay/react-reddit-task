import React from 'react';
import styles from "./Navbar.module.scss"

export default function Navbar(){
    return(
        <div className="header">
            <section className={styles.headerLeft}>
                <img src="reddit.png" alt="" />
            </section>
            <section className="header-right"></section>
        </div>
    )
}