import Products from "./components/Products/Products.jsx";
import Intro from "./components/Intro/Intro.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import "./App.css"

export default function App() {
  return (
    <>
      <MainLayout>
        <Intro />
        <Products />
      </MainLayout>
    </>
  )
}