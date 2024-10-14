import React from 'react'
import  * as sectionStyles from "../styles/sections.module.css"
import projectData from "../data/data"
import projectData2 from "../data/data2"
import projectData3 from "../data/data3"
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

export default function Projects(props) {
  return (
    <section id="projects" name="projects">
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span>
        <h2 className={sectionStyles.title} tabIndex="0">Projects</h2><span className={sectionStyles.spanright}>
        </span>
      </div>
      <div className={sectionStyles.section} >
      <div className={sectionStyles.cardSpacer} >

        {projectData.map(function(el, index){
          console.log(el.image)
          return (
            
          <div className={sectionStyles.card} key={index}>
            <div className={sectionStyles.imageWrapper} >
              <img src={el.image} alt={el.altText} className={sectionStyles.projectImage} />
            </div>
            <div className={sectionStyles.textWrap}>
            <h2 className={sectionStyles.projectsTitle} tabIndex="0">{el.name}</h2>
            <p className={sectionStyles.text} tabIndex="0">{el.text}</p>
            </div>
            <div className={sectionStyles.cardMenu}>
              
              <a href={el.webLink} className={sectionStyles.buttonWrapper} aria-label="link to hosted project" target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/202-sphere.svg" alt="" />
              </a>
              <a href={el.gitLink} className={sectionStyles.buttonWrapper} aria-label="link to github repository" target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/GitHub-Mark-32px.png" alt=""/>
              </a>
            </div>
            </div>
          )
          
        })}
        </div>

        {( (props.shown.two === false && props.shown.three === false) ? <button className={sectionStyles.showMore} id="button1" onClick={(e) => props.onClick(e)}>Show More</button> : null)}

        <div className={sectionStyles.cardSpacer} >
        {(props.shown.two === true ? (projectData2.map(function(el, index){
          return (
            
          <div className={sectionStyles.card} key={index} id="section2">
            <div className={sectionStyles.imageWrapper} >
              <img src={el.image} alt={el.altText} className={sectionStyles.projectImage}/>
            </div>
            <div className={sectionStyles.textWrap}>
            <h2 className={sectionStyles.projectsTitle} tabIndex="0">{el.name}</h2>
            <p className={sectionStyles.text} tabIndex="0">{el.text}</p>
            </div>
            <div className={sectionStyles.cardMenu}>
              
              {el.webLink === "none" ? '' :
            <a href={el.webLink} className={sectionStyles.buttonWrapper} aria-label="link to hosted project" target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/202-sphere.svg" alt="" />
              </a>
        }
              <a href={el.gitLink} className={sectionStyles.buttonWrapper} aria-label="link to github repository" target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/GitHub-Mark-32px.png" alt=""/>
              </a>
            </div>
            </div>
          )
          
        })) : null)}
        </div>

        {( props.shown.two === true && props.shown.three === false ? <button className={sectionStyles.showMore} id="button2" onClick={(e) => props.onClick(e)}>Show More</button> : "")}

        <div className={sectionStyles.cardSpacer} >
        {(props.shown.three ? (projectData3.map(function(el, index){
          return (
            
          <div className={sectionStyles.card} key={index} id="section3">
            <div className={sectionStyles.imageWrapper} >
              <img src={el.image} alt={el.altText} className={sectionStyles.projectImage}/>
            </div>
            <div className={sectionStyles.textWrap}>
            <h2 className={sectionStyles.projectsTitle} tabIndex="0">{el.name}</h2>
            <p className={sectionStyles.text} tabIndex="0">{el.text}</p>
            </div>
            <div className={sectionStyles.cardMenu}>
              
            <a href={el.webLink} className={sectionStyles.buttonWrapper} aria-label="link to hosted project" target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/202-sphere.svg" alt="" />
              </a>
              <a href={el.gitLink} className={sectionStyles.buttonWrapper} aria-label="link to github repository" target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/GitHub-Mark-32px.png" alt=""/>
              </a>
            </div>
            </div>
          )
          
        })) : "")}
        </div>
      </div>
    </section>
  )
}
