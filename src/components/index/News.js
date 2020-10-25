import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Heading from '../Heading';

const mediaS = (props) => props.theme.media.s;
const gapM = (props) => props.theme.gap.m;
const container = (props) => props.theme.container.main;
const red = (props) => props.theme.color.red;
const fontDeco = (props) => props.theme.font.deco;

const Wrap = styled.section`
  position: relative;
  .news {
    margin: 0 auto ${gapM};
    max-width: ${container};
    padding: 0 20px;
    .news__line {
      display: grid;
      font-size: 1.4rem;
      gap: 60px;
      grid-template-columns: 100px 1fr;
      margin-block-end: ${gapM};
      position: relative;
      &--date,
      &--text {
        padding: 3px 0;
      }
      &--date {
      }
      &--note {
        background: ${red};
        border-radius: 4px;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        left: calc(100px + 5px); /* 日付とテキストの間 */
        padding: 3px 5px;
        position: absolute;
      }
    }
  }
`;

const Bg = styled.div`
  background: #efefef;
  height: calc(100% - (5rem / 2)); /* 全体のheight - Headingのline-height / 2 */
  position: absolute;
  top: calc(5rem / 2);
  width: 100%;
  z-index: -1;
  @media (max-width: ${mediaS}) {
    height: calc(100% - (3.5rem / 2)); /* 全体のheight - Headingのline-height / 2 */
    top: calc(3.5rem / 2);
  }
`;

const News = () => {
  const news = [
    { date: '20201025', text: 'うんこ' },
    { date: '20201011', text: 'うんこ' },
  ];
  const [today, setToday] = useState('');
  useEffect(() => {
    const date = new Date();
    const todayStr = '' + date.getFullYear() + (date.getMonth() + 1) + date.getDate();
    setToday(todayStr);
  }, []);
  const format = (date) => {
    const y = date.substr(0, 4);
    const m = date.substr(4, 2);
    const d = date.substr(6, 2);
    return y + '-' + m + '-' + d;
  };

  return (
    <Wrap>
      <Heading position="left" text="News" />
      <ul className="news">
        {news.map((n) => (
          <li key={n.date} className="news__line">
            <time dateTime={format(n.date)} className="news__line--date">
              {format(n.date)}
            </time>
            {today - n.date <= 7 && <span className="news__line--note">NEW</span>}
            <p className="news__line--text">{n.text}</p>
          </li>
        ))}
      </ul>
      <Bg />
    </Wrap>
  );
};

export default News;
