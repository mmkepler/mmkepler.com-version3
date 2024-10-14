import React from 'react'
//import "../styles/footer.css"
import * as footerStyles from "../styles/footer.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer id="footer" className={footerStyles.footer}>
      <p className={footerStyles.copyright}>
      ©  {year} Melissa Kepler
      </p>
      <div className="socialIconsFooter">
        <span>
          <StaticImage className={footerStyles.socialIcon} id="github" src="../images/github-mark-white.png" alt="Github Octocat icon"/>
        </span>
        <span>
          <StaticImage className={footerStyles.socialIcon} id="bluesky" src="../images/bluesky_media_kit_logo_3.png" alt="bluesky social icon of a blue butterfly"/>
        </span>
        <span>
          <StaticImage className={footerStyles.socialIcon} id="threads" src="../images/threads-logo-white-01.png" alt="Threads icon in the shape of an at symbol"/>
        </span>
        <span>
          <StaticImage className={footerStyles.socialIcon} id="linkedin" src="../images/LI-In-Bug.png" alt="Linkedin logo"/>
        </span>
      </div>
    </footer>
  )
}
