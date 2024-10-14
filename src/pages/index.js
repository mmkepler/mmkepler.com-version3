import * as React from "react"
import * as styles from "../styles/main.module.css"
import * as sectionStyles from "../styles/sections.module.css"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import About from "../components/About"
import Failure from "../components/Failure"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Landing from "../components/Landing"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Success from "../components/Success"
import { useState } from "react"
import * as emailjs from "emailjs"
import planets from "../images/planets.png"


const IndexPage = () => {
  const [menuState, setMenuState] = useState(false);
  const initialState = {nameInput: "", emailInput: "", messageInput: ""};
  const [formState, setFormState] = useState(initialState);
  const initialSuccess = {show: false};
  const initialFailure = {show: false};
  const initialShowForm = {show: true};
  let [success, setSuccess] = useState(initialSuccess);
  let [failure, setFailure] = useState(initialFailure);
  let [showForm, setShowForm] = useState(initialShowForm);
  let initialProject = {one: true, two: false, three: false};
  let [showProjects, setProjects] = useState(initialProject);
  // console.log("Show projects", showProjects);

  //toggle Projects
  const toggleProjects = (e) => {
    e.preventDefault();

    if(showProjects.one && showProjects.two){
      
      setProjects({...showProjects, three: true});
    } else if(showProjects.one && showProjects.two === false) {
     
      setProjects({...showProjects, two: true});
    } 
  }

  //toggle hamburger menu
  const toggleMenu = (e) => {
    e.preventDefault();
    let buttonMenu = document.getElementsByClassName("item");
    // console.log("toggle", buttonMenu);
    buttonMenu.ariaExpanded = !menuState;
    setMenuState(!menuState);
  }
  
  return (
    <main id="main" className={styles.main}>
      <Header onClick={(e) => toggleMenu(e)}/>
      {menuState ? <Menu onClick={(e) => toggleMenu(e)} /> : ""}
      <Layout>
        <Landing/>
        <About/>
        <Skills/>
        <Projects onClick={(e) => toggleProjects(e)} shown={showProjects}/>
      </Layout>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Melissa Kepler</title>
