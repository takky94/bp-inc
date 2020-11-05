import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Box from '../components/index/Box';
import Works from '../components/index/Works';
import News from '../components/index/News';
import AboutUs from '../components/index/AboutUs';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO location={props.location} />
    <Box />
    <Works />
    <News />
    <AboutUs />
  </Layout>
);

export default IndexPage;
