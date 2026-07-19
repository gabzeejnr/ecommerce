import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartArrowDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import { useState } from "react";

export default function Header({ leftTitle, rightTitle, likeCount }) {

    return (
        <header>
            <h2>
                <span className={styles.left}>{leftTitle}</span>
                <span className={styles.left}>{rightTitle}</span>
            </h2>
            <div className={styles.right}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon icon={faBars} />
                <div className={styles.wrap}>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    {likeCount > 0 ?
                        <div className={styles.count}>{likeCount}</div>
                        :
                        <div></div>
                    }
                </div>
            </div>
        </header>
    )
}