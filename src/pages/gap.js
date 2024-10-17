import * as React from "react" 
import * as gapStyles from "../styles/gap.module.css"
import * as sectionStyles from "../styles/sections.module.css"
import * as styles from "../styles/home.module.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Menu from "../components/Menu"

import { StaticImage } from "gatsby-plugin-image"

import { useState } from "react"


const GapPage = () => {


  const [menuState, setMenuState] = useState(false);
  //toggle hamburger menu
  const toggleMenu = (e) => {
    e.preventDefault();
    let buttonMenu = document.getElementsByClassName("item");
    // console.log("toggle", buttonMenu);
    buttonMenu.ariaExpanded = !menuState;
    setMenuState(!menuState);
  }

  return (
    <main className={styles.main}>
      <Header onClick={(e) => toggleMenu(e)}/>
      {menuState ? <Menu onClick={(e) => toggleMenu(e)} /> : ""}
      <Layout>
        <h1>Gap</h1>
      </Layout>
      <Footer/>
    </main>
  )
}

export default GapPage

export const Head = () => <title>Not found</title>
