import { useCart } from "../../context/CartContext.jsx";
import GoBack from "../../components/GoBack/GoBack.jsx";
import MainLayout from "../../Layout/MainLayout";
import styles from "./Cart.module.scss";

function CartCard({ name, image, quantity, price, totalprice }) {

    //IMAGE NAME PRICE QUANTITY
    return (
        <div className={styles["cart-wrap"]}>
            <div className={styles["image-holder"]}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.detail}>
                <span className={styles.name}>{name}</span>
                <span className={styles.wrap}>
                    <span className={styles.price}>${price}</span>
                    <span className={styles.quantity}>{quantity}</span>
                </span>
                <span className={styles.total}>Total: {totalprice}</span>
            </div>
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
                <section className={styles["cart-wrapper"]}>
                    {cart.map(buys => (
                        <CartCard key={buys.id} name={buys.name}
                            image={buys.image} price={buys.price}
                            quantity={buys.quantity} totalprice={`$${Math.floor(buys.quantity * buys.price)}`} />
                    ))}

                    <div className={styles.checkout}>
                        <button>Proceed to Checkout</button>
                    </div>
                </section>
            )}
        </MainLayout>
    );
};