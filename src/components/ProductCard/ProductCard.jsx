import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import fallBack from "../../assets/Products/fallback.jpg"
import styles from "./ProductCard.module.scss";

export default function ProductCard({ likedShoes, setLikedShoes, setLikeCount, shoe }) {

    function increaseLike(shoeId) {
        const nowLiked = !likedShoes[shoeId];
        setLikedShoes(prev => ({ ...prev, [shoeId]: nowLiked }));
        setLikeCount(prev => nowLiked ? prev + 1 : prev - 1);
    }

    return (
        <div className={styles.product} id={shoe.id}>
            <div className={styles["image-holder"]}>
                <div className={styles["hovered-element"]}>
                    <div className={likedShoes[shoe.id] ? styles.liked : styles.heart} onClick={() => increaseLike(shoe.id)}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <Link to={`/products/${shoe.id}`}>
                        <button>
                            <FontAwesomeIcon icon={faEye} />
                            &ensp; View details
                        </button></Link>
                </div>

                <img id="images" src={shoe.image ? shoe.image : fallBack} alt={shoe.image ? shoe.name : "Fall-back image"} />
            </div>
            <div className={styles["detail-wrapper"]}>
                <div className={styles.details}>
                    <span className={styles.name}>{shoe.name}</span>
                    <span className={styles.price}>${shoe.price}</span>
                </div>
            </div>
        </div>
    )
}