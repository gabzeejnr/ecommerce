import styles from "./FooterLinks.module.scss";

export default function FooterLinks({ text, firstLink, secondLink, thirdLink, fourthLink }) {
    return (
        <div className={styles.wrapper}>
            <span className={styles.text}>{text}</span>
            <div className={styles.links}>
                <a href="#">{firstLink}</a>
                <a href="#">{secondLink}</a>
                <a href="#">{thirdLink}</a>
                <a href="#">{fourthLink}</a>
            </div>
            <a href="mailto:"></a>
        </div>
    )
}