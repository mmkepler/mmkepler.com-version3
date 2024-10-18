import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll"
import * as headerStyles from "../styles/header.module.css"


export default function Header(props) {
  return (
    <nav className={headerStyles.nav} id="nav">
      <ul id="header" className={headerStyles.header}>
      <li className={headerStyles.items}  tabIndex="0"><Link  activeClass="active" to="home" smooth={true} offset={-80}>Melissa<br></br>Kepler</Link></li>
        <li className={headerStyles.items} tabIndex="0"><Link to="about" smooth={true} offset={-80}>About</Link></li>
        <li className={headerStyles.items} tabIndex="0"><Link to="skills" smooth={true} offset={-80}>Skills</Link></li>
        <li className={headerStyles.items} tabIndex="0"><Link to="projects" smooth={true} offset={-80} isDynamic={true}>Projects</Link></li>
        <li className={headerStyles.items} tabIndex="0"><Link to="contact" smooth={true} offset={-80}>Contact</Link></li>
        <li className={headerStyles.items} tabIndex="0"><a href="/resume" target="_blank" rel="noreferrer" className={headerStyles.resume}>Resume</a></li>
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
