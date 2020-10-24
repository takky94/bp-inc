import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import 'typeface-share-tech-mono';

import MenuPc from './menus/HeaderPc';
import MenuSp from './menus/HeaderSp';

const mediaS = (props) => props.theme.media.s;
const heightS = (props) => props.theme.headerHeight.s;
const heightM = (props) => props.theme.headerHeight.m;
const gapXs = (props) => props.theme.gap.xs;
const gapS = (props) => props.theme.gap.s;
const gapXl = (props) => props.theme.gap.xl;
const container = (props) => props.theme.container.header;
const fontDeco = (props) => props.theme.font.deco;

const Wrap = styled.header`
  background: center center / cover url(/assets/header__background.png) no-repeat;
  height: ${heightM};
  @media (max-width: ${mediaS}) {
    height: ${heightS};
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${container};
  padding: ${gapXl} ${gapS};
  @media (max-width: ${mediaS}) {
    padding: ${gapXl} ${gapXs};
  }
`;
const Title = styled.div`
  a {
    h1,
    h3 {
      background: linear-gradient(to right, #222, #222 50%, #fff 50%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-position: 100%;
      background-size: 200% 100%;
      color: #fff;
      font: 2.6rem ${fontDeco};
      overflow: hidden;
      position: relative;
      transition: background-position 0.5s;
      &:hover {
        background-position: 0 100%;
      }
    }
  }
`;
const MenuWrap = styled.nav`
  color: #fff;
  font: 2rem ${fontDeco};
`;

const Header = ({ siteTitle, location }) => (
  <Wrap>
    <Container>
      <Title>
        <Link to="/">{location.pathname === '/' ? <h1>{siteTitle}</h1> : <h3>{siteTitle}</h3>}</Link>
      </Title>
      <MenuWrap>
        <MenuPc />
        <MenuSp />
      </MenuWrap>
    </Container>
  </Wrap>
);

export default Header;
