import React from 'react';
import styled from 'styled-components';

const red = (props) => props.theme.color.red;
const purple = (props) => props.theme.color.purple;
const blue = (props) => props.theme.color.blue;
const gapS = (props) => props.theme.gap.s;
const gapM = (props) => props.theme.gap.m;

const Wrap = styled.h4`
  border-block-end: 2px solid;
  border-block-start: 2px solid;
  display: inline-block;
  font-size: 1.8rem;
  margin: ${gapM} 0 ${gapS};
  padding: 0.5em 0;
  &.red {
    border-color: ${red};
  }
  &.purple {
    border-color: ${purple};
  }
  &.blue {
    border-color: ${blue};
  }
  &.center {
    display: block;
    text-align: center;
  }
`;

const Heading4 = ({ text, className }) => <Wrap className={className}>{text}</Wrap>;

export default Heading4;
