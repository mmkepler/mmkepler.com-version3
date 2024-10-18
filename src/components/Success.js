import React from 'react'
import * as successStyles from "../styles/success.module.css"

export default function 
() {
  return (
    <div id="success" className={successStyles.success}>
      <p className={successStyles.title}>Success!</p>
      Your message has been sent.
    </div>
  )
}
