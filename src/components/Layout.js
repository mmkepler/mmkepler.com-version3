import React from 'react'
import "../styles/layout.css"

export default function Layout({children}) {
  return (
      <div id="layout">
        {children}
      </div>
    )
}
