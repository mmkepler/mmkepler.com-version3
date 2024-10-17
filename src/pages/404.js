import * as React from "react"
import * as notFoundStyles from "../styles/notfound.module.css"
import * as styles from "../styles/home.module.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"




const NotFoundPage = () => {

  const [menuState, setMenuState] = useState(false);
  //toggle hamburger menu
  const toggleMenu = (e) => {
    e.preventDefault();
    let buttonMenu = document.getElementsByClassName("item");
    buttonMenu.ariaExpanded = !menuState;
    setMenuState(!menuState);
  }

  return (
    <main className={styles.main}>   
      <Header onClick={(e) => toggleMenu(e)}/>
      {menuState ? <Menu onClick={(e) => toggleMenu(e)} /> : ""}
      <Layout>
        <h1 className={notFoundStyles.title}>404</h1>
        <h2 className={notFoundStyles.subtitle}>The page you are looking for is not here</h2>
      </Layout>         
      <Footer/>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
