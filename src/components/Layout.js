import React from 'react'
import * as layoutStyles from"../styles/layout.module.css"

export default function Layout({children}) {
  return (
      <div id="layout" className={layoutStyles.layout}>
        {children}
      </div>
    )
}
