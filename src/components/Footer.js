import React from 'react'
import "../styles/footer.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer id="footer">
      <p id="copyright">
      ©  {year} Melissa Kepler
      </p>
      <div id="social-icons-footer">
        <span>
          <StaticImage height="32" className="social-icon" id="github" src="../images/github-mark-white.png" alt="Github Octocat icon"/>
        </span>
        <span>
          <StaticImage height="32" className="social-icon" id="bluesky" src="../images/bluesky_media_kit_logo_3.png" alt="bluesky social icon of a blue butterfly"/>
        </span>
        <span>
          <StaticImage height="32" className="social-icon" id="threads" src="../images/threads-logo-white-01.png" alt="Threads icon in the shape of an at symbol"/>
        </span>
        <span>
          <StaticImage height="32" className="social-icon" id="linkedin" src="../images/LI-In-Bug.png" alt="Linkedin logo"/>
        </span>
      </div>
    </footer>
  )
}
