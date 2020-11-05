import React from 'react';

import Layout from '../components/Layout';
import WorkBox from '../components/index/WorkBox';
import SEO from '../components/SEO';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO location={props.location} />
    <WorkBox title="Business consulting." subTitle="起業／副業コンサルティング" color="purple" position="left" />
  </Layout>
);

export default IndexPage;
