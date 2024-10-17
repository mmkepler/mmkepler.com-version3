import React from 'react'
import * as menuStyles from "../styles/menu.module.css"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll"


export default function Menu(props) {
  return(
    <div id="menu" className={menuStyles.menu}>
      <button type="button" id="close" className={menuStyles.close} onClick={props.onClick}>x</button>
      <ul>
        <li  className={menuStyles.link}>
          <Link to="home" spy={true} smooth={true} offset={-100} onClick={props.onClick}>Home</Link>
        </li>
        <li className={menuStyles.link}>
          <Link to="about"  spy={true} smooth={true} offset={-100} onClick={props.onClick}>About</Link>
        </li>
        <li className={menuStyles.link}>
          <Link to="skills"  spy={true} smooth={true} offset={-100} onClick={props.onClick}>Skills</Link>
        </li>
        <li className={menuStyles.link}>
          <Link to="projects"  spy={true} smooth={true} offset={-100} onClick={props.onClick}>Projects</Link>
        </li>
        <li className={menuStyles.link}>
          <Link to="contact"  spy={true} smooth={true} offset={-100} onClick={props.onClick}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}
