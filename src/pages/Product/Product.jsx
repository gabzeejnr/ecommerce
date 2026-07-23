import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getShoeById } from "../../services/services.js";
import { UseShoe } from "../../context/ShoeContext.jsx";
import styles from "./Product.module.scss";
import MainLayout from "../../Layout/MainLayout.jsx";
import ProductImage from "../../components/Product/ProductImage/ProductImage.jsx";
import ProductInfo from "../../components/Product/ProductInfo/ProductInfo.jsx";
import GoBack from "../../components/GoBack/GoBack.jsx";
import ShippingInfo from "../../components/Product/ShippingInfo/ShippingInfo.jsx";
import AddToCart from "../../components/Product/AddToCart/AddToCart.jsx";

function NoShoe() {

    const navigate = useNavigate();

    return (
        <section className={styles["no-shoe"]}>
            Error Loading Data
            <button onClick={() => navigate(-1)}>
                Go Back
            </button>
        </section>
    )
}

export default function Product() {

    //========================================
    //STATES & VARIABLES =====================
    //========================================

    const { id } = useParams();
    const [shoe, setShoe] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);


    //========================================
    //USE-EFFECTS ============================
    //========================================

    useEffect(() => {
        async function loadShoe() {
            try {
                setLoading(prev => !prev)
                const data = await getShoeById(id);

                if (!data || data === "Shoe not found.") {
                    setError(prev => !prev)
                } else {
                    setShoe(data)
                }
            } catch (error) {
                console.error(error);
                setError(prev => !prev)
            } finally {
                setLoading(prev => !prev)
            }
        }
        loadShoe();
    }, [id])

    if (!shoe) {
        return <div>Loading product details...</div>;
    }

    if (shoe === "Shoe not found.") {
        return (
            <>
                <NoShoe />
            </>
        )
    }

    return (
        <MainLayout>
            <GoBack />
            <section className={styles.wrap}>
                <ProductImage shoe={shoe} />
                <div className={styles["another-wrap"]}>
                    <ProductInfo shoe={shoe} />
                    <ShippingInfo />
                    <AddToCart shoe={shoe} />
                </div>
            </section>
        </MainLayout>
    );
}