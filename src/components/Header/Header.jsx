import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartArrowDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";

export default function Header({title}) {
    return(
        <header>
            <h2>{title}</h2>
            <div className={styles.right}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon={faCartArrowDown} />
            </div>
        </header>
    )
}