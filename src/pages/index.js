import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutBlock from "../components/about-block"
import ContactMe from "../components/contact-me"
import Portfolio from "../components/portfolio-block"
import Blog from "../components/my-blog-block"
import MainBlock from "../components/main-block"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ width: '100', marginBottom: `1.45rem` }}>    
      <MainBlock />     
      <AboutBlock />     
      <Portfolio />     
      <Blog />     
      <ContactMe />     
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
