import React from 'react'
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
      <div className={footerStyles.socialIconsFooter}>
        <span>
          <a href="https://github.com/mmkepler" target="_blank" rel="noopener noreferrer">
            <StaticImage className={footerStyles.socialIcon} id="github" src="../images/github-mark-white.png" alt="Github Octocat icon"/>
          </a>
        </span>
        <span>
          <a href="https://bsky.app/profile/mmkepler.bsky.social" target="_blank" rel="noopener noreferrer">
            <StaticImage className={footerStyles.socialIcon} id="bluesky" src="../images/bluesky_media_kit_logo_3.png" alt="bluesky social icon of a blue butterfly"/>
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/mmkepler/" target="_blank" rel="noopener noreferrer">
            <StaticImage className={footerStyles.socialIcon} id="linkedin" src="../images/LI-In-Bug.png" alt="Linkedin logo"/>
          </a>
        </span>
      </div>
    </footer>
  )
}
