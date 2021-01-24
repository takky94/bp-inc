import React from 'react';
import styled from 'styled-components';

const red = (props) => props.theme.color.red;
const purple = (props) => props.theme.color.purple;
const blue = (props) => props.theme.color.blue;
const green = (props) => props.theme.color.green;
const gapXs = (props) => props.theme.gap.xs;
const gapS = (props) => props.theme.gap.s;
const gapXl = (props) => props.theme.gap.xl;

const Wrap = styled.h3`
  color: #fff;
  font-size: 2.4rem;
  margin: ${gapXl} 0 ${gapS};
  padding: 0.5em 1em;
  &.red {
    background: ${red};
  }
  &.purple {
    background: ${purple};
  }
  &.blue {
    background: ${blue};
  }
  &.green {
    background: ${green};
  }
`;

const Heading3 = ({ text, className }) => <Wrap className={className}>{text}</Wrap>;

export default Heading3;
