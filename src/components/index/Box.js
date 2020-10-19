import React from 'react';
import styled from 'styled-components';
import 'typeface-share-tech-mono';

// import Image from '../Image';

const container = (props) => props.theme.container.main;
const gapXs = (props) => props.theme.gap.xs;
const gapS = (props) => props.theme.gap.s;
const gapL = (props) => props.theme.gap.l;
const gapXl = (props) => props.theme.gap.xl;
const fontDeco = (props) => props.theme.font.deco;

const Wrap = styled.div`
  margin: calc(-2px + -${gapXl} + -35px + -2px) auto ${gapL}; /* border + gapXL + logo + border */
  max-width: calc(${container});
`;
const BoxWrap = styled.div`
  background: #fff;
  border: 2px solid #000;
  padding: ${gapXl};
  margin: 0 ${gapS};
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
`;
const Lead = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin-block-end: ${gapS};
`;
const Description = styled.p`
  font-size: 1.6rem;
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
