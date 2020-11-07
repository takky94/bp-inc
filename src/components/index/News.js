import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Heading2 from '../Heading2';

const mediaS = (props) => props.theme.media.s;
const gapXs = (props) => props.theme.gap.xs;
const gapL = (props) => props.theme.gap.l;
const gapXl = (props) => props.theme.gap.xl;
const gapXxl = (props) => props.theme.gap.xxl;
const container = (props) => props.theme.container.main;
const red = (props) => props.theme.color.green;

const Wrap = styled.section`
  margin-block-end: ${gapXxl};
  position: relative;
  .news {
    display: grid;
    &__wrap {
      display: inline-block;
      height: 100px;
      list-style: none;
      margin: 0 auto ${gapL};
      max-width: ${container};
      overflow-y: scroll;
      padding: 20px;
      width: 100%;
      .news__line {
        font-size: 1.4rem;
        margin-block-end: ${gapXs};
        position: relative;
        &--date,
        &--note,
        &--text {
          display: inline;
          margin-inline-end: ${gapXs};
          padding: 3px 0;
        }
        &--date {
          color: #666;
          margin-inline-end: ${gapXl};
          @media (max-width: ${mediaS}) {
            margin-inline-end: ${gapXs};
          }
        }
        &--note {
          background: ${red};
          border-radius: 3px;
          color: #fff;
          display: inline-block;
          font-size: 1.2rem;
          font-weight: bold;
          padding: 3px 5px;
        }
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
  const news = [{ date: '20201107', text: '公式HPを公開しました' }];
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
      <Heading2 position="left" text="News" />
      <div className="news">
        <ul className="news__wrap">
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
      </div>
      <Bg />
    </Wrap>
  );
};

export default News;
