import styles from "./ProductInfo.module.scss";

export default function ProductInfo({ shoe }) {

    return (
        <div className={styles.info}>
            <h1 className={styles.name}>{shoe.name}</h1>
            <span className={styles.review}>Blahhhhhhhhhhhhhhhh</span>
            <h1 className={styles.price}>${shoe.price}</h1>
            <p className={styles["product-info"]}>{shoe.productInfo}</p>
        </div>
    )
}