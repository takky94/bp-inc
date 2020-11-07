import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Logo from './Logo';
import menus from './menus/menus';

const mediaS = (props) => props.theme.media.s;
const yellow = (props) => props.theme.color.yellow;
const gapXs = (props) => props.theme.gap.xs;
const gapS = (props) => props.theme.gap.s;
const gapM = (props) => props.theme.gap.m;
const container = (props) => props.theme.container.footer;
const fontDeco = (props) => props.theme.font.deco;
const higher = (props) => props.theme.zIndex.higher;

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
  .col__item {
    width: calc(50% - ${gapS});
    @media (max-width: ${mediaS}) {
      width: 100%;
    }
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
        list-style: none;
        li {
          margin-block-end: ${gapXs};
          a {
            color: #fff;
            display: inline-block;
            font: 2rem ${fontDeco};
            text-decoration: none;
            &::after {
              border-block-end: 2px solid #fff;
              content: '';
              display: block;
              transition: all 0.3s;
              width: 0;
            }
            &:hover::after {
              width: 100%;
            }
          }
        }
      }
    }
    &:last-of-type {
      margin-inline-start: ${gapS};
      text-align: right;
    }
  }
`;

const CopyRight = styled.div`
  background: #111;
  font: bold 1.2rem ${fontDeco};
  padding: ${gapXs} 0;
  text-align: center;
`;

const Button = styled.button`
  appearance: none;
  background: ${yellow};
  border: none;
  border-radius: 4px;
  bottom: 50px;
  cursor: pointer;
  height: 40px;
  opacity: 0.5;
  padding: 10px;
  position: fixed;
  right: 30px;
  transform: rotate(-45deg);
  width: 40px;
  z-index: ${higher};
  .arrow {
    border-block-start: 3px solid #fff;
    border-inline-end: 3px solid #fff;
    height: 20px;
    width: 20px;
  }
`;

const Footer = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Wrap>
      <MenuWrap>
        <Container>
          <Col>
            <div className="col__item">
              <h3>MENUS</h3>
              <ul>
                {menus.map((m) => (
                  <li key={m.title}>
                    <Link to={m.path}>{m.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col__item">
              <Logo />
            </div>
          </Col>
        </Container>
      </MenuWrap>
      <CopyRight>
        <Container>COPYRIGHT {new Date().getFullYear()} BP-INC.</Container>
      </CopyRight>
      <Button onClick={goToTop}>
        <div className="arrow" />
      </Button>
    </Wrap>
  );
};

export default Footer;
