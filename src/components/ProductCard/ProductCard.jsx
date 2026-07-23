import { Link, useSearchParams } from "react-router-dom";
import { UseShoe } from "../../context/ShoeContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import fallBack from "../../assets/Products/fallback.jpg"
import styles from "./ProductCard.module.scss";
import { useEffect } from "react";

export default function ProductCard({ shoe }) {

    /* function padEnd(number) {
        number = String(number);

        const indexOfDot = number.indexOf(".");

        if (indexOfDot === number.length - 2) {
            return `${number}0`
        } else if (indexOfDot === number.length - 3) {
            return number;
        } else if (!number.includes(".")) {
            return `0.00`
        }
    } */

    return (
        <div className={styles.product} id={shoe.id}>
            <div className={styles["image-holder"]}>
                <div className={styles["hovered-element"]}>
                    <div className={styles.heart}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <Link to={`/products/${shoe.id}`}>
                        <button>
                            <FontAwesomeIcon icon={faEye} />
                            &ensp; View details
                        </button>
                    </Link>
                </div>

                <img id="images" src={shoe.image ? shoe.image : fallBack} alt={shoe.image ? shoe.name : "Fall-back image"} />
            </div>
            <div className={styles["detail-wrapper"]}>
                <div className={styles.details}>
                    <span className={styles.name}>{shoe.name ? shoe.name : "No name available"}</span>
                    <span className={styles.price}>${shoe.price ? shoe.price.toFixed(2) : "0.00"}
                    </span>
                </div>
            </div>
        </div>
    )
}