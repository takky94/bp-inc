import React from 'react';

import Layout from '../components/Layout';
import WorkBox from '../components/index/WorkBox';
import SEO from '../components/SEO';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO location={props.location} />
    <WorkBox title="Office Work." subTitle="事務／業務運営代行" color="blue" position="left" />
  </Layout>
);

export default IndexPage;
