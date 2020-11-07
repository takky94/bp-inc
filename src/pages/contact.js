import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Heading2 from '../components/Heading2';
import Heading3 from '../components/Heading3';

const mediaS = (props) => props.theme.media.s;
const gapS = (props) => props.theme.gap.s;
const gapXxl = (props) => props.theme.gap.xxl;
const container = (props) => props.theme.container.main;

const Wrap = styled.article`
  margin: ${gapXxl} 0;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: ${container};
  padding: ${gapS};
  width: 100%;
`;

const Iframe = styled.iframe`
  border: none;
  height: 1500px;
  width: 100%;
  @media (max-width: ${mediaS}) {
    height: 2100px;
  }
`;

const ContactPage = (props) => {
  const recruitmentTitle = 'お問い合わせ';
  const recruitmentDescription = '株式会社ビジネスパートナーズのお問い合わせのページです';

  return (
    <Layout location={props.location}>
      <SEO location={props.location} pageTitle={recruitmentTitle} pageDescription={recruitmentDescription} />
      <Wrap>
        <Heading2 text="CONTACT" />
        <Container>
          <Iframe src="https://bizp.co.jp/_form/" />
        </Container>
      </Wrap>
    </Layout>
  );
};

export default ContactPage;
