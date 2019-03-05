import React from 'react';

import Layout from 'src/components/layout/layout';
import SEO from 'src/components/seo';
import AboutBlock from 'src/components/about-block/about-block';
import ContactMe from 'src/components/contact-me/contact-me';
import Portfolio from 'src/components/portfolio/portfolio';
import Blog from 'src/components/my-blog/my-blog';
import MainBlock from 'src/components/main-block/main-block';

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
