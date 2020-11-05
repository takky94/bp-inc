import React from 'react';
import styled from 'styled-components';

const mediaM = (props) => props.theme.media.m;
const gapXs = (props) => props.theme.gap.xs;
const gapS = (props) => props.theme.gap.s;
const gapM = (props) => props.theme.gap.m;
const container = (props) => props.theme.container.main;

const Wrap = styled.table`
  font-size: 1.6rem;
  margin: 0 auto;
  max-width: ${container};
  padding: 0 ${gapS};
  width: 100%;
  tr {
    display: grid;
    gap: ${gapXs};
    grid-template-columns: 150px 1fr;
    margin-block-end: ${gapM};
    th {
      text-align: left;
    }
    td {
      address {
        font-style: initial;
      }
    }
  }
  @media (max-width: ${mediaM}) {
    font-size: 1.4rem;
    margin-block-end: ${gapM};
    tr {
      grid-template-columns: 100px 1fr;
    }
  }
`;

const Table = ({ children }) => (
  <Wrap>
    <tbody>{children}</tbody>
  </Wrap>
);

export default Table;
