import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const LandingPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <p>I am Jean</p>
      <p>Want to know more <Link to="/aboutus">about me</Link>?</p>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default LandingPage