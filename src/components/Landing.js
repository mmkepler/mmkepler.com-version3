import React from 'react'
import "../styles/landing.css"
import { StaticImage } from "gatsby-plugin-image"


export default function Landing() {
  
  return (
    <div id="landing">
      <StaticImage id="logo" src="../images/newestlogo2.png" alt="Logo for Melissa Kepler, it has a planet with a small moon orbiting it in the back of the text. " loading="eager"/>
    </div>
  )
}
