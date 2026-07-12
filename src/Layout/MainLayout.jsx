import Header from "../components/Header/Header.jsx"

export default function MainLayout({children}) {
  return(
    <>
        <Header title="BLOOMSHOP" />
        <main>{children}</main>
    </>
  )
}
