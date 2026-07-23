import { UseShoe } from "../../context/ShoeContext.jsx";
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

export default function Products() {

    const { shoeData, isLoading } = UseShoe();
    const [isTimeExpired, setIsTimeExpired] = useState(false);


    if (isLoading) {
        return (
            <ProductLoader />
        )
    }

    return (
        <section className={styles.products}>
            {shoeData.map(shoe => (
                <ProductCard key={shoe.id} shoe={shoe} />
            ))}
        </section>
    )
}
