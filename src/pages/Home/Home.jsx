import { useState } from "react";
import Intro from "../../components/Intro/Intro.jsx";
import Products from "../../components/Products/Products.jsx";
import MainLayout from "../../Layout/MainLayout.jsx";

export default function Home() {

    const [likeCount, setLikeCount] = useState(0);
    return (
        <>
            <MainLayout likeCount={likeCount}>
                <Intro />
                <Products likeCount={setLikeCount} setLikeCount={setLikeCount} />
            </MainLayout>
        </>
    )
}