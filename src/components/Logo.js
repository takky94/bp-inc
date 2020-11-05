import React from 'react';
import styled from 'styled-components';
import 'typeface-share-tech-mono';

const mediaS = (props) => props.theme.media.s;
const gapM = (props) => props.theme.gap.m;
const gapXl = (props) => props.theme.gap.xl;
const fontDeco = (props) => props.theme.font.deco;

const Wrap = styled.div`
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

const Logo = () => <Wrap>BP Inc.</Wrap>;

export default Logo;
