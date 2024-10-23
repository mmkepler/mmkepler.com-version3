import * as React from "react" 
import * as styles from "../styles/home.module.css"
import Footer from "../components/Footer"
import HeaderShort from "../components/HeaderShort"
import Layout from "../components/Layout"







const GapPage = () => {

  return (
    <main className={styles.main}>
      <HeaderShort onClick={(e) => toggleMenu(e)}/>
      <Layout>
        <h1>Gap</h1>
      </Layout>
      <Footer/>
    </main>
  )
}

export default GapPage
