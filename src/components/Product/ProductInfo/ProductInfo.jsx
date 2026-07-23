import Rating from '../Rating/Rating.jsx';
import styles from "./ProductInfo.module.scss";

export default function ProductInfo({ shoe }) {

    return (
        <div className={styles.info}>
            <h1 className={styles.name}>{shoe.name ? shoe.name : "No name available"}</h1>
            <Rating rating={shoe.review} />
            <h1 className={styles.price}>${shoe.price ? shoe.price.toFixed(2) : "0.00"}</h1>
            <p className={styles["product-info"]}>{shoe.productInfo}</p>
        </div>
    )
}