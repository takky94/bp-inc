import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import menus from './menus';

const gapXs = (props) => props.theme.gap.xs;

const Wrap = styled.ul`
  align-items: center;
  display: grid;
  gap: ${gapXs};
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 100%;
  list-style: none;
  li {
    a {
      color: #fff;
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
`;

const HeaderMenu = () => (
  <Wrap className="sp__none">
    {menus.map((menu) => (
      <li key={menu.path}>
        <Link to={menu.path}>{menu.title}</Link>
      </li>
    ))}
  </Wrap>
);

export default HeaderMenu;
