import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./Products.module.scss";
import { useState, useEffect } from "react";
import { getShoes } from "../../services/services.js";

function ProductLoader() {
    return (
        <div className={styles["skeleton-wrap"]}>
            <Skeleton height={400} borderRadius={"1.5rem"} />
            <Skeleton height={400} borderRadius={"1.5rem"} />
            <Skeleton height={400} borderRadius={"1.5rem"} />
            <Skeleton height={400} borderRadius={"1.5rem"} />
            <Skeleton height={400} borderRadius={"1.5rem"} />
            <Skeleton height={400} borderRadius={"1.5rem"} />
            <Skeleton height={400} borderRadius={"1.5rem"} />
            <Skeleton height={400} borderRadius={"1.5rem"} />
            <Skeleton height={400} borderRadius={"1.5rem"} />
            <Skeleton height={400} borderRadius={"1.5rem"} />
        </div>
    )
}

export default function Products({ likeCount, setLikeCount }) {

    const [likedShoes, setLikedShoes] = useState({});
    const [shoeData, setShoeData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isTimeExpired, setIsTimeExpired] = useState(false);


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

        /*useEffect(() => {
            const timer = setTimeout(() => {
                setIsTimeExpired(false);
            }, 10000);

            return () => clearTimeout(timer);
        }, [])*/

        const textStyle = {
            textAlign: "center"
        }
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
