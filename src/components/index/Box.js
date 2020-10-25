import React from 'react';
import styled from 'styled-components';
import 'typeface-share-tech-mono';

// import Image from '../Image';

const container = (props) => props.theme.container.main;
const mediaS = (props) => props.theme.media.s;
const gapS = (props) => props.theme.gap.s;
const gapM = (props) => props.theme.gap.m;
const gapXl = (props) => props.theme.gap.xl;
const gapXxl = (props) => props.theme.gap.xxl;
const fontSerif = (props) => props.theme.font.serif;
const fontDeco = (props) => props.theme.font.deco;

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
const Logo = styled.div`
  border-block-end: 2px solid #000;
  display: inline-block;
  font: 35px ${fontDeco};
  line-height: 1;
  margin-block-end: ${gapXl};
  &::before {
    background: center / contain url(/assets/logo.png);
    content: '';
    display: inline-block;
    height: 25px;
    margin-inline-end: 5px;
    width: 25px;
  }
  @media (max-width: ${mediaS}) {
    margin-block-end: ${gapM};
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
      <Logo>BP Inc.</Logo>
      <Lead>社会の役に立つ仕事を通して、 みんなで幸せになる会社を目指します。</Lead>
      <Description>
        リタイヤー、サラリーマン、OL、フリーター、主婦、学生の皆さんこれからの人生を、自分の力で切り開く、そんな時代が来ました。時間は待ってくれません。老若男女を問わず、今からスタートアップ出来ます。当社は、独自ネットワークと幅広い人脈、豊富な経験を活かし、そんな皆様のスタートアップを、全力でお手伝いします。
      </Description>
    </BoxWrap>
  </Wrap>
);

export default Box;
