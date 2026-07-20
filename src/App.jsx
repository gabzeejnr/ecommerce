import { useEffect, useState } from "react";
import Products from "./components/Products/Products.jsx";
import Intro from "./components/Intro/Intro.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css"

export default function App() {

  const [likeCount, setLikeCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(prev => !prev)
    }, 500);

    return () => clearTimeout(timer)
  }, []);

  if (isLoading) {
    return (
      <div className="Loader">
        <Skeleton height={"11vh"} />
        <Skeleton height={"69vh"} />
        <Skeleton height={"20vh"} />
      </div>
    )
  }

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