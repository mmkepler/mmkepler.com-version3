import React from 'react'
import * as sectionStyles from "../styles/sections.module.css"
const artisticSkills = ["Graphic Design", "Photo Editing", "Photoshop", "Illustrator", "Sketch", "3D Animation/Modeling"]
const codingSkills = ["JavaScript/ES6+", "React/Hooks", "Redux", "CSS/Flexbox", "Styled Components", "Bootstrap", "Sass", "Node.js", "Express.js", "MongoDB", "Accessibility", "npm", "Git/GitHub", "Firebase DB & Auth", "Webpack/Babel", "Gulp/Grunt", "Rest APIs", "JQuery"]
const deploymentSkills = ["Cpanel", "Heroku", "AWS/S3", "Digital Ocean", "Netlify"]
const knowledgeableSkills = ["Next.js", "Workbox/PWA", "Google Analytics", "Apollo/GraphQL", "Keystone.js", "Python/PHP", "WordPress", "SEO", "Cloudflare", "Adobe XD"]

import { StaticImage } from "gatsby-plugin-image"


//const allSkills = ["codingSkills", "deploymentSkills", "knowledgeableSkills", "artisticSkills"]


export default function Skills() {
  return (
    <section id="skills" className={sectionStyles.skills}
    name="skills">
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span><h2 className={sectionStyles.title} tabIndex="0">Skills</h2><span className={sectionStyles.spanright}></span>
      </div>
      <div className={sectionStyles.section} >
      <div className={sectionStyles.skillsContainer}>
        <div className={sectionStyles.skillsWrapper} >
        
        <div className={sectionStyles.columns}>
        
          <div className={sectionStyles.one}>
            <div>
            <h3 className={sectionStyles.skilltTitles}>Coding Skills</h3>
            <ul>
              {codingSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index} className={sectionStyles.listItems}>{el}</li>
                )
              })}
            </ul>
          </div>

        
              
          <div>
            <h3 className={sectionStyles.skilltTitles}>Deployment Platforms</h3>
            <ul>
              {deploymentSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index} className={sectionStyles.listItems}>{el}</li>
                )
              })}
            </ul>
          </div>

          </div>

          <div className={sectionStyles.two}>

          <div>
            <h3 className={sectionStyles.skilltTitles}>Knowledgeable In:</h3>
            <ul>
              {knowledgeableSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index} className={sectionStyles.listItems}>{el}</li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className={sectionStyles.skilltTitles}>Artistic Skills:</h3>
            <ul>
              {artisticSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index} className={sectionStyles.listItems}>{el}</li>
                )
              })}
            </ul>
          </div>

          </div>

        </div>

        </div>
      </div>
    </div>
    </section>
  )
}
