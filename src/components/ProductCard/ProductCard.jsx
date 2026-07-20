import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import fallBack from "../../assets/Products/fallback.jpg"
import styles from "./ProductCard.module.scss";

export default function ProductCard({ likedShoes, id, name, image, price }) {
    return (
        <div className={styles.product} key={id}>
            <div className={styles["image-holder"]}>
                <div className={styles["hovered-element"]}>
                    <div className={likedShoes[{ id }] ? styles.liked : styles.heart} onClick={() => increaseLike(shoe.id)}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <button>
                        <FontAwesomeIcon icon={faEye} />
                        &ensp; View details
                    </button>
                </div>

                <img id="images" src={image ? image : fallBack} alt={image ? name : "Fall-back image"} />
            </div>
            <div className={styles["detail-wrapper"]}>
                <div className={styles.details}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.price}>${price}</span>
                </div>
            </div>
        </div>
    )
}