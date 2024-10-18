import * as React from "react"
import * as notFoundStyles from "../styles/notfound.module.css"
import * as styles from "../styles/home.module.css"
import Footer from "../components/Footer"
import Header404 from "../components/Header404"
import Layout from "../components/Layout"






const NotFoundPage = () => {



  return (
    <main className={styles.main}>   
      <Header404/>
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
