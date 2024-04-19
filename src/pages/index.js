import * as React from "react"
import "../styles/main.css"
import Layout from "../components/Layout"
import About from "../components/About"
import Failure from "../components/Failure"
import Header from "../components/Header"
import Landing from "../components/Landing"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Success from "../components/Success"

const IndexPage = () => {
  return (
    <main >
      <Landing/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Melissa Kepler</title>
