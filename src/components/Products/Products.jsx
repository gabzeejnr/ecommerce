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

    if (isLoading) {
        return (
            <ProductLoader />
        )
    }

    return (
        <section className={styles.products}>
            {shoeData.map(shoe => (
                <ProductCard key={shoe.id} setLikeCount={setLikeCount}
                  likedShoes={likedShoes} setLikedShoes={setLikedShoes}
                  shoe={shoe} />
            ))}
        </section>
    )
}
