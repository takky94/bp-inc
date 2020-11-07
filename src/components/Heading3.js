import React from 'react';
import styled from 'styled-components';

const red = (props) => props.theme.color.red;
const purple = (props) => props.theme.color.purple;
const blue = (props) => props.theme.color.blue;
const green = (props) => props.theme.color.green;
const gapXs = (props) => props.theme.gap.xs;
const gapS = (props) => props.theme.gap.s;
const gapL = (props) => props.theme.gap.l;

const Wrap = styled.h3`
  font-size: 2.2rem;
  margin: ${gapL} 0 ${gapS};
  &.red {
    color: ${red};
  }
  &.purple {
    color: ${purple};
  }
  &.blue {
    color: ${blue};
  }
  &.green {
    color: ${green};
  }
  &::before {
    content: '■';
    display: inline-block;
    margin-inline-end: ${gapXs};
  }
`;

const Heading3 = ({ text, className }) => <Wrap className={className}>{text}</Wrap>;

export default Heading3;
