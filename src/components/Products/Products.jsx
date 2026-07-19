import fallBack from "../../assets/Products/fallback.jpg";
import AddToCart from "../AddToCart/AddToCart.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Products.module.scss";
import { useState, useEffect } from "react";
import { getShoes } from "../../services/services.js";

export default function Header() {

    const [count, setCount] = useState(0);
    const [shoeData, setShoeData] = useState([])


    useEffect(() => {

        async function fetchData() {
            const data = await getShoes();
            setShoeData(data.shoes);
        }
        fetchData();

    }, [])

    function increaseLike() {
        setCount(prev => prev + 1);
        console.log(count);
    }

    return (
        <section className={styles.products}>
            {shoeData.map(shoe => (
                <div className={styles.product} key={shoe.id}>
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

                        <img id="images" src={shoe.image ? `../../public/Products/${shoe.image}` : fallBack} alt={shoe.image ? shoe.name : "Fall-back image"} />
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