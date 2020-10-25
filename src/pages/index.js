import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Box from '../components/index/Box';
import Works from '../components/index/Works';
import News from '../components/index/News';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO location={props.location} />
    <Box />
    <Works />
    <News />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
