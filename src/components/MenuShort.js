import React from 'react'
import * as menuStyles from "../styles/menu.module.css"


export default function MenuShort(props) {
    

  return(
    <div id="menu" className={menuStyles.menu}>
      <button type="button" id="close" className={menuStyles.close} onClick={props.onClick}>x</button>
      <ul>
        <li  className={menuStyles.link}>
          <a href="#main"onClick={props.onClick} >Home</a>
        </li>
        <li className={menuStyles.link}>
          <a href="#about" onClick={props.onClick} >About</a>
        </li>
        <li className={menuStyles.link}>
          <a href="#skills"onClick={props.onClick} >Skills</a>
        </li>
        <li className={menuStyles.link}>
          <a href="#projects"onClick={props.onClick} >Projects</a>
        </li>
        <li className={menuStyles.link}>
          <a href="#contact"onClick={props.onClick} >Contact</a>
        </li>
      </ul>
    </div>
  )
}
