import { products } from "../../data/products.js";
import fallBack from "../../assets/fallback.jpg";
import AddToCart from "../AddToCart/AddToCart.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Products.module.scss";
import { useState } from "react";

export default function Header() {

    const [count, setCount] = useState(0)

    function increaseLike() {
        setCount(prev => prev + 1);
        console.log(count);
    }

    return (
        <section className={styles.products}>
            {products.map((product, index) => (
                <div className={styles.product} key={index + 1}>
                    <div className={styles["image-holder"]}>
                        <div className={styles["hovered-element"]}>
                            <div className={styles.heart} onClick={increaseLike}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <button>
                                <FontAwesomeIcon icon={faEye} />
                                &ensp; View details
                            </button>
                        </div>

                        <img src={product.image ? product.image : fallBack} alt={product.image ? product.name : "Fall-back image"} />
                    </div>
                    <div className={styles["detail-wrapper"]}>
                        <div className={styles.details}>
                            <span className={styles.name}>{product.name}</span>
                            <span className={styles.price}>${product.price}</span>
                        </div>
                        <AddToCart />
                    </div>
                </div>
            ))}
        </section>
    )
}