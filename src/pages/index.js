import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutBlock from '../components/about-block/about-block';
import ContactMe from '../components/contact-me/contact-me';
import Portfolio from '../components/portfolio/portfolio';
import Blog from '../components/my-blog/my-blog';
import MainBlock from '../components/main-block/main-block';

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
