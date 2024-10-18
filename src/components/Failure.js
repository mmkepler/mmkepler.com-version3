import React from 'react'
import * as failureStyles from "../styles/failure.module.css"

export default function Failure() {
  return (
    <div className={failureStyles.failure}>
      <p className={failureStyles.warning}>Red Alert</p>
      Your message was not sent<br/>
      Please refresh page and try again
    </div>
  )
}
