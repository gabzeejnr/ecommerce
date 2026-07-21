import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getShoeById } from "../../services/services.js";
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
    const [shoe, setShoe] = useState("");
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(0)

    //========================================
    //USE-EFFECTS ============================
    //========================================

    useEffect(() => {
        async function testData() {
            try {
                const data = await getShoeById(id);
                setShoe(data)
            } catch (error) {
                console.error(error);
            }
        }
        testData();
    }, [id])

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
                    <AddToCart />
                </div>
            </section>
        </MainLayout>
    );
}