import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';

const container = (props) => props.theme.container.main;
const mediaS = (props) => props.theme.media.s;
const gapS = (props) => props.theme.gap.s;
const gapM = (props) => props.theme.gap.m;
const gapXl = (props) => props.theme.gap.xl;
const gapXxl = (props) => props.theme.gap.xxl;
const fontSerif = (props) => props.theme.font.serif;

const Wrap = styled.section`
  margin: calc(-2px + -${gapXl} + -35px + -2px) auto ${gapXxl}; /* border + gapXL + logo + border */
  max-width: ${container};
`;
const BoxWrap = styled.div`
  background: #fff;
  border: 2px solid #000;
  padding: ${gapXl};
  margin: 0 ${gapS};
  @media (max-width: ${mediaS}) {
    padding: ${gapM};
  }
`;

const Lead = styled.p`
  font: bold 3rem ${fontSerif};
  margin-block-end: ${gapS};
  @media (max-width: ${mediaS}) {
    font-size: 2.5rem;
  }
`;
const Description = styled.p`
  font-size: 1.4rem;
  @media (max-width: ${mediaS}) {
    font-size: 1.2rem;
  }
`;

const Box = () => (
  <Wrap>
    <BoxWrap>
      <Logo />
      <Lead>社会の役に立つ仕事を通して、 みんなで幸せになる会社を目指します。</Lead>
      <Description>
        リタイヤー、サラリーマン、OL、フリーター、主婦、学生の皆さんこれからの人生を、自分の力で切り開く、そんな時代が来ました。時間は待ってくれません。老若男女を問わず、今からスタートアップ出来ます。当社は、独自ネットワークと幅広い人脈、豊富な経験を活かし、そんな皆様のスタートアップを、全力でお手伝いします。
      </Description>
    </BoxWrap>
  </Wrap>
);

export default Box;
