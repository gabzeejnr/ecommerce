import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getShoeById } from "../../services/services.js";
import styles from "./Product.module.scss";
import MainLayout from "../../Layout/MainLayout.jsx";
import ProductImage from "../../components/Product/ProductImage/ProductImage.jsx";
import ProductInfo from "../../components/Product/ProductInfo/ProductInfo.jsx";
import GoBack from "../../components/GoBack/GoBack.jsx";
import ShippingInfo from "../../components/Product/ShippingInfo/ShippingInfo.jsx";

export default function Product() {

    const { id } = useParams();
    const [shoe, setShoe] = useState("");
    const navigate = useNavigate();

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

    return (
        <MainLayout>
            <GoBack />
            <section className={styles.wrap}>
                <ProductImage shoe={shoe} />
                <ProductInfo shoe={shoe} />
                <ShippingInfo />
            </section>
        </MainLayout>
    );
}