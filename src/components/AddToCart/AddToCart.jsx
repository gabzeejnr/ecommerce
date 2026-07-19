import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./AddToCart.module.scss";

export default function AddToCart() {
    return (
        <div className={styles.wrap}>
            <button>
                <FontAwesomeIcon icon={faCartArrowDown} />
                <span>Add to Cart</span>
            </button>
        </div>
    );
}