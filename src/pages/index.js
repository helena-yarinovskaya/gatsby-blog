import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutBlock from '../components/about-block';
import ContactMe from '../components/contact-me';
import Portfolio from '../components/portfolio-block';
import Blog from '../components/my-blog-block';
import MainBlock from '../components/main-block';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ width: '100' }}>
      <MainBlock />
      <AboutBlock />
      <Portfolio />
      <Blog />
      <ContactMe />
    </div>
  </Layout>
);

export default IndexPage;
