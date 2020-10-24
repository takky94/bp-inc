import React from 'react';
import styled from 'styled-components';

import spread60 from '../../styles/animations/spread60';
import spread100 from '../../styles/animations/spread100';

const mediaS = (props) => props.theme.media.s;
const gapL = (props) => props.theme.gap.l;
const container = (props) => props.theme.container.header;
const redOp = (props) => props.theme.color.redOp;
const purpleOp = (props) => props.theme.color.purpleOp;
const blueOp = (props) => props.theme.color.blueOp;
const fontDeco = (props) => props.theme.font.deco;

const Wrap = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  &.shown {
    .work__background {
      animation: ${spread60} 1.5s both;
      @media (max-width: ${mediaS}) {
        animation: ${spread100} 1.5s both;
      }
    }
  }
`;
const BoxContainer = styled.div`
  height: 150px;
  margin: 0 auto ${gapL};
  max-width: ${container};
  padding: 30px 20px 50px;
  position: relative;
  z-index: 1;
  h3 {
    font: 3.5rem ${fontDeco};
    line-height: calc(150px - (30px + 50px) - 20px); /* 全体の高さ - padding上下 - small */
    @media (max-width: ${mediaS}) {
      font-size: 2.5rem;
    }
  }
  small {
    font-size: 1.5rem;
    line-height: calc(150px - (30px + 50px) - 50px); /* 全体の高さ - padding上下 - h3 */
  }
  &.right {
    text-align: right;
  }
`;
const Background = styled.div`
  height: 150px;
  position: absolute;
  top: 0;
  width: 0;
  z-index: 0;
  &.red {
    background: ${redOp};
  }
  &.purple {
    background: ${purpleOp};
  }
  &.blue {
    background: ${blueOp};
  }
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
`;

const WorkBox = ({ title, subTitle, color, position, description, link }) => (
  <Wrap className="work__box">
    <BoxContainer className={position}>
      <small>{subTitle}</small>
      <h3>{title}</h3>
    </BoxContainer>
    <Background className={`work__background ${color} ${position}`} />
  </Wrap>
);

export default WorkBox;
