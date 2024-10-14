import * as React from "react"
import * as styles from "../styles/home.module.css"
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
import { StaticImage } from "gatsby-plugin-image"
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

  
  //handle form change
  const handleChange = (e) => {
    e.preventDefault();
    let {target} = e.target;
    let {name, value} = target;
    setFormState({...formState, [name]: value});
  }

  //submit contact form
  
  const submitForm = (event) => {
    event.preventDefault();
    const templateId = process.env.GATSBY_API_TEMPLATE_ID;
    const userId = process.env.GATSBY_API_USER_ID;
    const serviceId = process.env.GATSBY_API_SERVICE_ID;
    let formInfo = {from_name: formState.nameInput, from_email: formState.emailInput, message: formState.messageInput, reply_to: formState.emailInput};

    /*emailjs.send(
      serviceId, templateId, formInfo, userId)
      .then(() => {
        console.log("worked")
        setSuccess({show: true})
        setShowForm({show: false});
        setFormState(initialState);
        })
      .catch(err => {
        console.log("err", err);
        setShowForm({show: false});
        setFailure({show:true})
      });*/
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
        <section id="contact" className={styles.contact}
          name="contact">
         <div className={sectionStyles.holder}>
        <span className={sectionStyles.spanleft}></span><h2 className={sectionStyles.title}>Contact</h2><span className={sectionStyles.spanright}></span>
        </div>
        <div className={sectionStyles.contactWrapper}>
        <div className={sectionStyles.section} >
            <div className={styles.space}>
            <div className={sectionStyles.spacer}>
            { showForm.show && <p>Send a message to my planet!</p>}
            </div>
            <StaticImage src={planets} alt="image of a teal planet with 3 orbiting moons."/>
          <div>
            {success.show && <Success />}
            {failure.show && <Failure />}
            { showForm.show && 
          <form 
            className={styles.form} id="form"
            onSubmit={(event) => submitForm(event)}
          >
            <label htmlFor="nameInput">
              Name:
              <br />
            <input 
            name="nameInput" 
            className={styles.nameInput}
            id="nameInput"
            type="text"
            placeholder="name"
            value={formState.nameInput}
            onChange={(e) => handleChange(e)}
            min-lenth="2"
            aria-required="true"
            required
            />
            <br />
            </label>

            <label htmlFor="emailInput">
              Email:
              <br />
              <input 
                name="emailInput"
                className={styles.emailInput}
                id="emailInput"
                type="email"
                placeholder="email"
                value={formState.emailInput}
                onChange={(e) => handleChange(e)}
                aria-required="true"
                required
              />
              <br/>
            </label>

            <label htmlFor="messageInput">
              Message:
              <br/>
            <textarea
              form="form"
              name="messageInput"
              className={styles.messageInput}
              id="messageInput"
              cols="20" 
              rows="5" 
              placeholder="What's up?"
              value={formState.messageInput}
              onChange={(e) => handleChange(e)}
              aria-required="true"
              required
            >
            </textarea>
            <br/>
            </label>

            <button
              type="submit"
              className={styles.submit} id="submit">
              Submit
            </button>
          </form>
           }
          </div>
          </div>
        </div>
        </div>

        </section>
      </Layout>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Melissa Kepler</title>
