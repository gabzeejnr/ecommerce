import { useEffect, useState } from "react";
import RoutePage from "./routes.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css"

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(prev => !prev)
    }, 200);

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
      <RoutePage />
    </>
  )
}