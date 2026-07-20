import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./Products.module.scss";
import { useState, useEffect } from "react";
import { getShoes } from "../../services/services.js";
import ProductLoader from "./ProductLoader.jsx";

export default function Products({ likeCount, setLikeCount }) {

    const [likedShoes, setLikedShoes] = useState({});
    const [shoeData, setShoeData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        async function fetchData() {
            try {
                const data = await getShoes();
                setShoeData(data.shoes);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();

    }, []);

    function increaseLike(shoeId) {
        const nowLiked = !likedShoes[shoeId];
        setLikedShoes(prev => ({ ...prev, [shoeId]: nowLiked }));
        setLikeCount(prev => nowLiked ? prev + 1 : prev - 1);
    }

    if (isLoading) {
        return (
            <ProductLoader />
        )
    }

    return (
        <section className={styles.products}>
            {shoeData.map(shoe => (
                <ProductCard
                    likedShoes={likedShoes} name={shoe.name}
                    price={shoe.price} id={shoe.id} image={shoe.image} />
            ))}
        </section>
    )
}
