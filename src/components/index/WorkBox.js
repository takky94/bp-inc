import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import spread60 from '../../styles/animations/spread60';
import spread100 from '../../styles/animations/spread100';
import spreadHorizon from '../../styles/animations/spreadHorizon';
import fadeOutLeft from '../../styles/animations/fadeOutLeft';
import fadeOutRight from '../../styles/animations/fadeOutRight';

const mediaS = (props) => props.theme.media.s;
const gapM = (props) => props.theme.gap.m;
const container = (props) => props.theme.container.main;
const red = (props) => props.theme.color.red;
const redOp = (props) => props.theme.color.redOp;
const purple = (props) => props.theme.color.purple;
const purpleOp = (props) => props.theme.color.purpleOp;
const blue = (props) => props.theme.color.blue;
const blueOp = (props) => props.theme.color.blueOp;
const fontDeco = (props) => props.theme.font.deco;

const Wrap = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  .work__box {
    &--title,
    &--description {
      /* 横幅揃える用のコンテナ */
      margin: 0 auto ${gapM};
      max-width: ${container};
    }
    &--title {
      height: 150px;
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
        font-size: 1.4rem;
        line-height: calc(150px - (30px + 50px) - 50px); /* 全体の高さ - padding上下 - h3 */
        @media (max-width: ${mediaS}) {
          font-size: 1.2rem;
        }
      }
      &.right {
        text-align: right;
      }
    }
    &--description {
      font-size: 1.4rem;
      padding: 0 20px;
      &.right {
        text-align: right;
        @media (max-width: ${mediaS}) {
          text-align: left;
        }
      }
    }
    &--icon {
      height: 140px;
      opacity: 0.5;
      position: absolute;
      top: 10px;
      width: 140px;
      z-index: 1;
      &.left {
        right: 40%;
        @media (max-width: ${mediaS}) {
          right: 20px;
        }
      }
      &.right {
        left: 40%;
        @media (max-width: ${mediaS}) {
          left: 20px;
        }
      }
    }
    &--horizon {
      /* 装飾用の水平線 */
      height: 2px;
      position: absolute;
      top: calc(150px - 50px); /* title部分全体の高さ - paddingBottom分 */
      width: 0;
      &.red {
        background: ${red};
      }
      &.purple {
        background: ${purple};
      }
      &.blue {
        background: ${blue};
      }
      &.left {
        right: 0;
      }
      &.right {
        left: 0;
      }
    }
    &--background {
      /* 装飾用の背景色 */
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
    }
  }
  &.work__box--shown {
    /* 可視範囲入ったらアニメーション */
    .work__box--background {
      animation: ${spread60} 1s both;
      @media (max-width: ${mediaS}) {
        animation: ${spread100} 1s both;
      }
    }
    .work__box--horizon {
      &.left {
        animation: ${spreadHorizon} 0.5s 1s both, ${fadeOutLeft} 0.5s 1.5s both;
      }
      &.right {
        animation: ${spreadHorizon} 0.5s 1s both, ${fadeOutRight} 0.5s 1.5s both;
      }
    }
  }
`;

const WorkBox = ({ title, subTitle, color, position, description, link }) => (
  <Wrap className={`work__box`}>
    <div className={`work__box--title ${position}`}>
      <small>{subTitle}</small>
      <h3>{title}</h3>
    </div>
    {description && (
      <p className={`work__box--description ${position}`}>
        {description}
        <Link>MORE</Link>
      </p>
    )}
    <img className={`work__box--icon ${position}`} src={`/assets/${subTitle}.png`} />
    <div className={`work__box--horizon ${color} ${position}`} />
    <div className={`work__box--background ${color} ${position}`} />
  </Wrap>
);

export default WorkBox;
