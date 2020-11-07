import React from 'react';
import styled from 'styled-components';

const mediaM = (props) => props.theme.media.m;
const gapXs = (props) => props.theme.gap.xs;
const gapS = (props) => props.theme.gap.s;
const gapM = (props) => props.theme.gap.m;
const greenOp = (props) => props.theme.color.greenOp;
const container = (props) => props.theme.container.main;

const Wrap = styled.div`
  margin: 0 auto ${gapS};
  max-width: ${container};
  padding: 0 ${gapS};
  width: 100%;
`;

const T = styled.table`
  font-size: 1.6rem;
  tr {
    display: grid;
    gap: ${gapXs};
    grid-template-columns: 150px 1fr;
    margin-block-end: ${gapM};
    th,
    td {
      padding: 1em;
    }
    th {
      text-align: left;
    }
    td {
      address {
        font-style: initial;
      }
    }
  }
  &.border {
    border: 1px solid #111;
    border-collapse: collapse;
    tr {
      gap: 0;
      margin-block-end: 0;
    }
    th,
    td {
      border: 1px solid #111;
    }
    th {
      background: ${greenOp};
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

const Table = ({ children, border = false }) => (
  <Wrap>
    <T className={border ? 'border' : ''}>
      <tbody>{children}</tbody>
    </T>
  </Wrap>
);

export default Table;
