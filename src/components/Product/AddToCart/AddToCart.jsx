import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./AddToCart.module.scss";


export default function AddToCart() {

    //========================================
    //STATES & VARIABLES =====================
    //========================================

    const [quantity, setQuantity] = useState(0);


    //========================================
    //FUNCTIONS ==============================
    //========================================

    function addBtn() {
        setQuantity(prev => prev + 1);
        if (quantity >= 100) setQuantity(100)
    }

    function subtractBtn() {
        setQuantity(prev => prev - 1);
        if (quantity <= 0) setQuantity(0)
    }

    return (
        <div className={styles.wrap}>
            <button className={styles.cart}>
                <FontAwesomeIcon icon={faCartArrowDown} />
                <span>Add to Cart</span>
            </button>
            <div className={styles.quantity}>
                <span>Quantity</span>
                <div className={styles.count}>
                    <button onClick={addBtn}>&#43;</button>
                    <span>Quantity: {quantity}</span>
                    <button onClick={subtractBtn}>&minus;</button>
                </div>
                <span className={styles["error-text"]}>{quantity === 0 ? (
                    "Can't go below 0"
                ) : (
                    quantity === 100 ? "Can't go above 100" : null
                )}</span>
            </div>
        </div>
    );
}