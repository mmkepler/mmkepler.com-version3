import React from 'react'
import "../styles/layout.css"
import Footer from "./Footer"

export default function Layout({children}) {
  return (
      <div>
        {children}
        <Footer/>
      </div>
    )
}
