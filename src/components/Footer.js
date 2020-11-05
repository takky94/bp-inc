import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const gapXs = (props) => props.theme.gap.xs;
const gapS = (props) => props.theme.gap.s;
const gapM = (props) => props.theme.gap.m;
const container = (props) => props.theme.container.footer;
const fontDeco = (props) => props.theme.font.deco;

const Wrap = styled.footer`
  color: #fff;
`;

const MenuWrap = styled.div`
  background: linear-gradient(45deg, #3b3b3b, #111);
  padding: ${gapM} 0;
`;

const Container = styled.div`
  margin: auto;
  max-width: ${container};
  padding: 0 ${gapS};
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    width: calc(50% - ${gapS});
    &:first-of-type {
      margin-inline-end: ${gapS};
      text-align: left;
      h3 {
        font: bold 3rem ${fontDeco};
        letter-spacing: 3px;
        margin-block-end: ${gapM};
        position: relative;
        &::after {
          background: rgba(0, 0, 0, 0.25);
          bottom: 3px; /* 少し文字にかかる程度 */
          content: '';
          display: inline-block;
          height: 5px;
          left: 0;
          position: absolute;
          width: 130px;
        }
      }
      ul {
        font-size: 1.4rem;
        list-style: none;
        li {
          margin-block-end: ${gapXs};
        }
      }
    }
    &:last-of-type {
      margin-inline-start: ${gapS};
      text-align: right;
    }
  }
`;

const Menu = styled;

const CopyRight = styled.div`
  background: #111;
  font: bold 1.2rem ${fontDeco};
  padding: ${gapXs} 0;
  text-align: center;
`;

const Footer = () => (
  <Wrap>
    <MenuWrap>
      <Container>
        <Col>
          <div>
            <h3>MENUS</h3>
            <ul>
              <li>MENU1</li>
              <li>MENU2</li>
              <li>MENU3</li>
              <li>MENU4</li>
            </ul>
          </div>
          <div>
            <Logo />
          </div>
        </Col>
      </Container>
    </MenuWrap>
    <CopyRight>
      <Container>COPYRIGHT {new Date().getFullYear()} BP-INC.</Container>
    </CopyRight>
  </Wrap>
);

export default Footer;
