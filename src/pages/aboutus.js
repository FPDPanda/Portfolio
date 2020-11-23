import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I am Jean</p>
      <p>If you want to see some of my projects check out my <a href="https://github.com/FPDPanda" rel="noreferrer" target="_blank">GitHub</a></p>
      <p>Want to work with me? <Link to="/contact">Reach out!</Link></p>
    </Layout>
  )
}

export default AboutPage