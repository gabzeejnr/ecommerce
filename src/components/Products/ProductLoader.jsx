import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Products.module.scss"

export default function ProductLoader() {
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