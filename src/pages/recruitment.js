import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Heading2 from '../components/Heading2';

const mediaS = (props) => props.theme.media.s;
const mediaM = (props) => props.theme.media.m;
const red = (props) => props.theme.color.red;
const purple = (props) => props.theme.color.purple;
const blue = (props) => props.theme.color.blue;
const blueOp = (props) => props.theme.color.blueOp;
const gapXs = (props) => props.theme.gap.xs;
const gapS = (props) => props.theme.gap.s;
const gapM = (props) => props.theme.gap.m;
const gapL = (props) => props.theme.gap.l;
const gapXxl = (props) => props.theme.gap.xxl;
const container = (props) => props.theme.container.main;

const Wrap = styled.article`
  margin: ${gapXxl} 0;
`;

const Container = styled.div`
  font-size: 1.6rem;
  margin: 0 auto;
  max-width: ${container};
  padding: ${gapS};
  width: 100%;
`;

const RecruitmentPage = (props) => {
  const recruitmentTitle = '求人情報';
  const recruitmentDescription = '株式会社ビジネスパートナーズの求人情報のページです';

  return (
    <Layout location={props.location}>
      <SEO location={props.location} pageTitle={recruitmentTitle} pageDescription={recruitmentDescription} />
      <Wrap>
        <Heading2 text="RECRUITMENT" />
        <Container>
          <p>
            担当エリアのお客様（個人・事業所）に訪問し、新規契約・住所変更などの手続きや、受信料の集金をするお仕事になります。
            <strong>未経験でも大丈夫、決して難しい仕事ではありません</strong>
            。経験豊富な先輩スタッフが「ゆっくり・丁寧」に指導いたしますのでご安心ください。少しでもご興味がある方は、是非お気軽にお問い合わせ・ご応募ください。
          </p>
          <h2>募集要項</h2>
        </Container>
      </Wrap>
    </Layout>
  );
};

export default RecruitmentPage;
