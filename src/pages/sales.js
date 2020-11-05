import React from 'react';

import Layout from '../components/Layout';
import WorkBox from '../components/index/WorkBox';
import SEO from '../components/SEO';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO location={props.location} />
    <WorkBox title="Sales consulting." subTitle="営業コンサルティング" color="red" position="left" />
  </Layout>
);

export default IndexPage;
