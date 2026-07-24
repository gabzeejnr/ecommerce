import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartArrowDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext.jsx";
import styles from "./Header.module.scss";

export default function Header({ leftTitle, rightTitle }) {

    const { cart, showCart, toggleCart } = useCart();
    const [sideBar, setSideBar] = useState(false);

    return (
        <header>
            <NavLink to={"/"}>
                <h2>
                    <span className={styles.left}>{leftTitle}</span>
                    <span className={styles.left}>{rightTitle}</span>
                </h2>
            </NavLink>
            <div className={styles.right}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <div className={styles.wrap} onClick={(toggleCart)}>
                    <Link to={"/cart"}>
                        <FontAwesomeIcon icon={faCartArrowDown} />
                        {cart.length > 0 ? <div className={styles.count}>{cart.length}</div>
                            :
                            <div />
                        }
                    </Link>

                </div>
                <FontAwesomeIcon icon={faBars} onClick={() => setSideBar(prev => !prev)} />
            </div>
            {sideBar &&
                <aside className={styles.dropdown}>

                </aside>}
        </header>
    )
}