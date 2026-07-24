import { useCart } from "../../context/CartContext.jsx";
import GoBack from "../../components/GoBack/GoBack.jsx";
import MainLayout from "../../Layout/MainLayout";
import { toFix, sumCart } from "../../utils/functions.js";
import styles from "./Cart.module.scss";

function CartCard({ totalprice, shoe }) {

    const { increaseQuantity, getQuantity, decreaseQuantity } = useCart();

    //IMAGE NAME PRICE QUANTITY
    return (
        <div className={styles["cart-card"]}>
            <div className={styles.left}>
                <div className={styles["image-holder"]}>
                    <img src={shoe.image} alt={shoe.name} />
                </div>
                <div className={styles["product-details"]}>
                    <span className={styles.name}>{shoe.name}</span>
                    <button>Remove</button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.quantity}>
                    <button onClick={() => increaseQuantity(shoe)}>&#43;</button>
                    <span>{getQuantity(shoe)}</span>
                    <button onClick={() => decreaseQuantity(shoe)}>&minus;</button>
                </div>
                <div className={styles["total-price"]}>{totalprice}</div>
            </div>
            {/*  <div className={styles["image-holder"]}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.detail}>
                <span className={styles.name}>{name}</span>
                <span className={styles.wrap}>
                    <span className={styles.price}>${price}</span>
                    <span className={styles.quantity}>{quantity}</span>
                </span>
                <span className={styles.total}>Total: {totalprice}</span>
            </div> */}
        </div>
    )
}

export default function Cart() {

    const { cart } = useCart();

    const pStyle = {
        textAlign: "center",
        minHeight: "70vh",
        display: "grid",
        placeItems: "center"
    }

    return (
        <MainLayout>
            <GoBack />

            {cart.length === 0 ? (
                <p style={pStyle}>Nothing to see Here &#128075;</p>
            ) : (
                <div className={styles["main-wrap"]}>
                    <div className={styles.wrapper}>
                        <span className={styles["span-wrap"]}>Your Shopping Cart  <span>{cart.length > 1 ? (`(${cart.length} items)`) : (`(${cart.length} item)`)}</span>
                        </span>
                        <section className={styles["cart-wrapper"]}>
                            {cart.map(buys => (
                                <CartCard key={buys.id} shoe={buys}
                                    totalprice={toFix(Math.floor(buys.quantity * buys.price))} />
                            ))}
                        </section>
                    </div>
                    <div className={styles["order-summary"]}>
                        <h4>Order Summary</h4>
                        <div className={styles.summary}>
                            <div className={styles.sum}>
                                Subtotal
                                <span className={styles.right}>{(cart.length === 1) ? (
                                    toFix(cart[0].price * cart[0].quantity)
                                ) : (
                                    `$${sumCart(cart)}`)}
                                </span>
                            </div>
                            <div className={styles.sum}>
                                Shipping
                                <span className={`${styles.right} ${styles.green}`}>Free</span>
                            </div>
                            <div className={styles.sum}>
                                Estimated Tax
                                <span className={styles.right}>{`$${0}`}</span>
                            </div>
                        </div>

                        <span className={styles.total}>Total
                            <span>$268.92</span>
                        </span>
                        <div className={styles["checkout-btn"]}>
                            <button>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>

            )}
        </MainLayout>
    );
};