import React from 'react'
import * as headerStyles from "../styles/header.module.css"


export default function Header(props) {

  let scrollAnim = (e) => {
    e.preventDefault
    console.log("e", e)
    let location = e.target.href.match(/\#(.*)/)[1];
    console.log("location", location);
    let el = document.getElementById(location);
    el.scrollIntoView({behavior: "smooth"})
  }

  return (
    <nav className={headerStyles.nav} id="nav">
      <ul id="header" className={headerStyles.header}>
      <li className={headerStyles.items}  tabIndex="0"><a href="#main" className={headerStyles.scroll} /*onClick={(e) => scrollAnim(e)}*/ >Melissa<br></br>Kepler</a></li>
        <li className={headerStyles.items} tabIndex="0"><a href="#about" className={headerStyles.scroll} /*onClick={(e) => scrollAnim(e)}*/>About</a></li>
        <li className={headerStyles.items} tabIndex="0"><a href="#skills" className={headerStyles.scroll} /*onClick={(e) => scrollAnim(e)}*/ >Skills</a></li>
        <li className={headerStyles.items} tabIndex="0"><a href="#projects" className={headerStyles.scroll} /*onClick={(e) => scrollAnim(e)}*/>Projects</a></li>
        <li className={headerStyles.items} tabIndex="0"><a href="#contact" className={headerStyles.scroll} /*onClick={(e) => scrollAnim(e)}*/>Contact</a></li>
        <li className={headerStyles.items} tabIndex="0"><a href="/resume" className={headerStyles.resume} target="_blank" rel="noreferrer">Resume</a></li>
        <li className={headerStyles.toggle}>
          <button className={headerStyles.menu} id="menu" onClick={props.onClick} type="button" aria-expanded="false" aria-label="hamburger menu">
          <span className={headerStyles.hamburger}></span>
          <span className={headerStyles.hamburger}></span>
          <span className={headerStyles.hamburger}></span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
