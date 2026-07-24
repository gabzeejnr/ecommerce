import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { data, socialMedia } from "../../data/companyData.js";
import styles from "./Footer.module.scss";
import FooterLinks from "./FooterLinks/FooterLinks.jsx";
import { Instagram } from "../../assets/SVGs/svg.jsx";

export default function Footer({ leftName, rightName }) {

    return (
        <footer className={styles.footer}>
            <div className={styles["footer-wrap"]}>
                <div className={styles.contact}>
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
                                {dat.icon === faLocationDot ? (
                                    <span className={styles.text}>{dat.string}</span>
                                ) : (
                                    <a className={styles.text}
                                        href={dat.icon === faPhone ? `tel:${dat.string}` : `mailto:${dat.string}`}
                                    >{dat.string}</a>
                                )}
                            </span>
                        ))}
                    </div>
                    <div className={styles["social-media"]}>
                        {socialMedia.map((social, index) => (
                            <a href={social.link} target="_blank" key={index + 1}>
                                <div className={styles.icon}>
                                    {social.name === "Instagram" ? <Instagram /> : <FontAwesomeIcon icon={social.icon}
                                        style={{ color: social.color }} />}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <FooterLinks text="SHOP"
                    firstLink="All Products" secondLink="New Arrivals"
                    thirdLink="Sale" fourthLink="Featured" />
                <FooterLinks text="CUSTOMER CARE"
                    firstLink="Contact Us" secondLink="Help Center"
                    thirdLink="Shipping Info" fourthLink="Returns & Exchanges" />
                <FooterLinks text="CUSTOMER CARE"
                    firstLink="About Us" secondLink="Careers"
                    thirdLink="Blog" fourthLink="Press" />
                <FooterLinks text="LEGAL"
                    firstLink="Privacy Policy" secondLink="Terms & Conditions"
                    thirdLink="Cookie Policy" fourthLink="Accessibility" />
            </div>
        </footer >
    );
}