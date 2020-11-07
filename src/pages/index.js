import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Box from '../components/index/Box';
import Works from '../components/index/Works';
import News from '../components/index/News';
import Info from '../components/index/Info';
import AboutUs from '../components/index/AboutUs';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO location={props.location} />
    <Box />
    <Works />
    <News />
    <Info />
    <AboutUs />
  </Layout>
);

export default IndexPage;
