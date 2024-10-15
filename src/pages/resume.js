import React from 'react'
import * as resumeStyles from "../styles/resume.module.css"


const ResumePage = () => {
  const url = "/melissa_kepler_resume.pdf";
  return (
      <div>
        <iframe src={url} allowFullScreen className={resumeStyles.iframe}></iframe>
      </div>
  )
}

export default ResumePage;