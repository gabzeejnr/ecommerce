import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../../context/CartContext";
import styles from "./AddToCart.module.scss";


export default function AddToCart({ shoe }) {

    // =============================================
    // STATES & VARIABLES ==========================
    // =============================================

    const {
        cart,
        setCart,
        addToCart,
        removeFromCart,
        getQuantity,
        increaseQuantity,
        decreaseQuantity
    } = useCart();
    const [errorMessage, setErrorMesssage] = useState("");


    // =============================================
    // FUNCTIONS ===================================
    // =============================================

    return (
        <div className={styles.wrap}>
            <button className={styles.cart} onClick={() => addToCart(shoe)}>
                <FontAwesomeIcon icon={faCartArrowDown} />
                <span>Add to Cart</span>
            </button>
            <div className={styles.quantity}>
                <span>Quantity</span>
                <div className={styles.count}>
                    <button onClick={() => increaseQuantity(shoe)}>&#43;</button>
                    <span>Quantity: {getQuantity(shoe)}</span>
                    <button onClick={() => decreaseQuantity(shoe)}>&minus;</button>
                </div>
                <span className={styles["error-text"]}>{getQuantity(shoe) === 0 ? "Quantity can't go below 0" : (
                    getQuantity(shoe) === 100 ? "Quantity can't go above 100" : null
                )}</span>
            </div>
        </div>
    );
}