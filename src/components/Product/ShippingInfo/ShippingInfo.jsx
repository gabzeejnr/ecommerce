import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ShippingInfo.module.scss";
import { faRotateBackward, faShield, faTruck } from "@fortawesome/free-solid-svg-icons";

function Info({ boldText, smallText, icon }) {
    return (
        <div className={styles.info}>
            <div className={styles["icon-holder"]}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <p>
                <span>
                    <strong>{boldText}</strong>
                </span>
                <span>{smallText}</span>
            </p>
        </div>
    )
}

export default function ShippingInfo() {
    return (
        <div className={styles["shipping-card"]}>
            <Info boldText="Free Shipping" smallText="On orders over $50"
                icon={faTruck} />
            <Info boldText="Warranty" smallText="1 year guarantee"
                icon={faShield} />
            <Info boldText="Easy Returns" smallText="30-day"
                icon={faRotateBackward} />
        </div>
    )
}