import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import menus from './menus';
import center from '../../styles/animations/hamburger/center';
import centerActive from '../../styles/animations/hamburger/centerActive';
import top from '../../styles/animations/hamburger/top';
import topActive from '../../styles/animations/hamburger/topActive';
import bottom from '../../styles/animations/hamburger/bottom';
import bottomActive from '../../styles/animations/hamburger/bottomActive';
import fadeDown from '../../styles/animations/fadeDown';
import fadeIn from '../../styles/animations/fadeIn';

const gapXs = (props) => props.theme.gap.xs;
const gapXl = (props) => props.theme.gap.xl;
const higher = (props) => props.theme.zIndex.higher;
const highest = (props) => props.theme.zIndex.highest;

const Wrap = styled.div`
  height: 100%;
  position: relative;
`;
const MenuWrap = styled.div`
  height: 100vh;
  left: 0;
  opacity: 0;
  overflow: scroll;
  position: fixed;
  top: 0;
  transition: opacity 1s;
  width: 100vw;
  z-index: ${higher};
  ul {
    background: linear-gradient(-45deg, #222, #555);
    list-style: none;
    height: 100%;
    padding: ${gapXl} ${gapXs};
    li {
      display: block;
      margin-block-end: ${gapXs};
      text-align: center;
      a {
        color: #fff;
      }
    }
  }
  &.show {
    animation: ${fadeDown} 0.8s both;
    opacity: 1;
    ul {
      li {
        animation: ${fadeIn} 0.5s both;
        &:nth-child(1) {
          animation-delay: 0.8s;
        }
        &:nth-child(2) {
          animation-delay: 1s;
        }
        &:nth-child(3) {
          animation-delay: 1.2s;
        }
        &:nth-child(4) {
          animation-delay: 1.4s;
        }
      }
    }
  }
`;
const Hamburger = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: ${highest};
  span {
    background: #fff;
    border-radius: 10px;
    display: block;
    height: 2px;
    &:nth-child(1) {
      animation: ${top} 0.8s both;
      width: 20px;
      &.active {
        animation: ${topActive} 0.8s both;
      }
    }
    &:nth-child(2) {
      animation: ${center} 0.8s both;
      width: 30px;
      &.active {
        animation: ${centerActive} 0.8s both;
      }
    }
    &:nth-child(3) {
      animation: ${bottom} 0.8s both;
      float: right;
      width: 20px;
      &.active {
        animation: ${bottomActive} 0.8s both;
      }
    }
    &:not(:last-child) {
      margin-block-end: 5px;
    }
  }
`;

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrap className="pc__none">
      <MenuWrap className={open ? 'show' : ''}>
        <ul>
          {menus.map((menu) => (
            <li key={menu.path}>
              <Link to={menu.path}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </MenuWrap>
      <Hamburger
        className={open ? 'show' : 'hidden'}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className={open ? 'active' : ''}></span>
        <span className={open ? 'active' : ''}></span>
        <span className={open ? 'active' : ''}></span>
      </Hamburger>
    </Wrap>
  );
};

export default HeaderMenu;
