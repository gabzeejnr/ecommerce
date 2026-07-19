import { useState } from "react";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import { leftName, rightName } from "../utils/brandName.js";

export default function MainLayout({ children }) {

  const [likeCount, setLikeCount] = useState()

  return (
    <>
      <Header leftTitle={leftName} rightTitle={rightName} likeCount={likeCount} />
      <main>{children}</main>
      <Footer leftName={leftName} rightName={rightName} />
    </>
  )
}
