import styles from "./ProductImage.module.scss"

export default function ProductImage({ shoe }) {
    return (
        <div className={styles["this-wrapper"]}>
            <div className={styles["image-holder"]}>
                <img src={shoe.image ? shoe.image : shoe.fallBack} alt={shoe.name} />
            </div>
        </div>
    )
}