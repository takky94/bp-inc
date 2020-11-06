import React from 'react';
import styled from 'styled-components';

const mediaS = (props) => props.theme.media.s;
const gapL = (props) => props.theme.gap.l;
const container = (props) => props.theme.container.header;
const fontDeco = (props) => props.theme.font.deco;

const Wrap = styled.div`
  overflow: hidden;
  width: 100%;
`;
const Container = styled.div`
  margin: 0 auto ${gapL};
  max-width: ${container};
`;
const H = styled.h2`
  font: 4.5rem ${fontDeco};
  line-height: 5rem;
  padding: 0 20px;
  position: relative;
  @media (max-width: ${mediaS}) {
    font-size: 3rem;
    line-height: 3.5rem;
  }
  &::after {
    background: #111;
    content: '';
    display: inline-block;
    height: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
  &.left {
    &::after {
      left: -70%;
      @media (max-width: ${mediaS}) {
        left: -55%;
      }
    }
  }
  &.right {
    text-align: right;
    &::after {
      right: -70%;
      @media (max-width: ${mediaS}) {
        right: -55%;
      }
    }
  }
`;

const Heading = ({ position = 'left', text }) => (
  <Wrap>
    <Container>
      <H className={position}>{text}</H>
    </Container>
  </Wrap>
);

export default Heading;
