import React from 'react'
import * as headerShortStyles from "../styles/headershort.module.css"
import * as notFoundStyles from "../styles/notfound.module.css"


export default function HeaderShort(props) {
  return (
    <nav className={headerShortStyles.nav} id="nav">
      <ul id="header" className={headerShortStyles.header}>
      <li className={headerShortStyles.items}  tabIndex="0"><a className={notFoundStyles.link} href="/">Melissa<br></br>Kepler</a></li>
        
      </ul>
    </nav>
  )
}
