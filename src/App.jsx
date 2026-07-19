import { useState } from "react";
import Products from "./components/Products/Products.jsx";
import Intro from "./components/Intro/Intro.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import "./App.css"

export default function App() {

  const [likeCount, setLikeCount] = useState(0)
  return (
    <>
      <MainLayout likeCount={likeCount}>
        <Intro />
        <Products likeCount={likeCount}
          setLikeCount={setLikeCount} />
      </MainLayout>
    </>
  )
}