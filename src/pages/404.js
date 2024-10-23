import * as React from "react"
import * as styles from "../styles/home.module.css"
import * as notFoundStyles from "../styles/notfound.module.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeaderShort from "../components/HeaderShort"
import Layout from "../components/Layout"






const NotFoundPage = () => {



  return (
    <main className={styles.main}>   
      <HeaderShort/>
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
