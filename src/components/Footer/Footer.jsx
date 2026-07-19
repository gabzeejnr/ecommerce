import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data, socialMedia } from "../../data/companyData.js";
import styles from "./Footer.module.scss";

export default function Footer({ leftName, rightName }) {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>
                    <span>{leftName}</span>
                    <span>{rightName}</span>
                </h2>
                <p>Discover unique products that inspire your lifestyle.
                    Quality craftsmanship meets modern design.</p>
                <div className={styles["contact-wrap"]}>
                    {data.map((dat, index) => (
                        <span className={styles.line} key={index + 1}>
                            <FontAwesomeIcon icon={dat.icon} />
                            <span className={styles.text}>{dat.string}</span>
                        </span>
                    ))}
                </div>
                <div className={styles["social-media"]}>
                    {socialMedia.map((social, index) => (
                        <a href="#" key={index + 1}>
                            <div><FontAwesomeIcon icon={social.icon} /></div>
                        </a>
                    ))}
                </div>
                <div className={styles.shop}>
                    <span>SHOP</span>
                </div>
            </div>
        </footer>
    );
}