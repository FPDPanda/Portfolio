import React from "react"
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>I am Jean</p>
      <p>If you want to see some of my projects check out my <a href="https://github.com/FPDPanda" target="_blank">GitHub</a></p>
      <p>Want to work with me? <Link to="/contact">Reach out!</Link></p>
    </div>
  )
}

export default AboutPage