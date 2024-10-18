import React from 'react'
import * as headerStyles from "../styles/header.module.css"
import * as notFoundStyles from "../styles/notfound.module.css"


export default function Header404(props) {
  return (
    <nav className={headerStyles.nav} id="nav">
      <ul id="header" className={headerStyles.header}>
      <li className={headerStyles.items}  tabIndex="0"><a className={notFoundStyles.link} href="/">Melissa<br></br>Kepler</a></li>
        
      </ul>
    </nav>
  )
}
