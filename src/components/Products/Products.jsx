import fallBack from "../../assets/Products/fallback.jpg";
import AddToCart from "../AddToCart/AddToCart.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Products.module.scss";
import { useState, useEffect } from "react";
import { getShoes } from "../../services/services.js";

export default function Products({ likeCount, setLikeCount }) {

    const [likedShoes, setLikedShoes] = useState({})
    const [shoeData, setShoeData] = useState([])


    useEffect(() => {

        async function fetchData() {
            const data = await getShoes();
            setShoeData(data.shoes);
        }
        fetchData();

    }, [])

    function increaseLike(shoeId) {
        const nowLiked = !likedShoes[shoeId];
        setLikedShoes(prev => ({ ...prev, [shoeId]: nowLiked }));
        setLikeCount(prev => nowLiked ? prev + 1 : prev - 1);
    }

    return (
        <section className={styles.products}>
            {shoeData.map(shoe => (
                <div className={styles.product} key={shoe.id}>
                    <div className={styles["image-holder"]}>
                        <div className={styles["hovered-element"]}>
                            <div className={likedShoes[shoe.id] ? styles.liked : styles.heart} onClick={() => increaseLike(shoe.id)}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <button>
                                <FontAwesomeIcon icon={faEye} />
                                &ensp; View details
                            </button>
                        </div>

                        <img id="images" src={shoe.image ? `/Products/${shoe.image}` : fallBack} alt={shoe.image ? shoe.name : "Fall-back image"} />
                    </div>
                    <div className={styles["detail-wrapper"]}>
                        <div className={styles.details}>
                            <span className={styles.name}>{shoe.name}</span>
                            <span className={styles.price}>${shoe.price}</span>
                        </div>
                        <AddToCart />
                    </div>
                </div>
            ))}
        </section>
    )
}
