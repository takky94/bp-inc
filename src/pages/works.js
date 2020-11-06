import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import WorkBox from '../components/index/WorkBox';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import Image from '../components/Image';
import Logo from '../components/Logo';

const mediaS = (props) => props.theme.media.s;
const mediaM = (props) => props.theme.media.m;
const red = (props) => props.theme.color.red;
const purple = (props) => props.theme.color.purple;
const blue = (props) => props.theme.color.blue;
const blueOp = (props) => props.theme.color.blueOp;
const gapXs = (props) => props.theme.gap.xs;
const gapS = (props) => props.theme.gap.s;
const gapM = (props) => props.theme.gap.m;
const gapL = (props) => props.theme.gap.l;
const gapXxl = (props) => props.theme.gap.xxl;
const container = (props) => props.theme.container.main;

const Wrap = styled.article`
  margin: ${gapXxl} 0;
`;

const Description = styled.div`
  margin: 0 auto ${gapXxl};
  max-width: ${container};
  padding: 0 ${gapS};
  width: 100%;
  h3 {
    font-size: 2.2rem;
    margin: ${gapL} 0 ${gapS};
    &.red {
      color: ${red};
    }
    &.purple {
      color: ${purple};
    }
    &.blue {
      color: ${blue};
    }
    &::before {
      content: '■';
      display: inline-block;
      margin-inline-end: ${gapXs};
    }
  }
  h4 {
    border-block-end: 2px solid;
    border-block-start: 2px solid;
    display: inline-block;
    font-size: 1.8rem;
    margin: ${gapM} 0 ${gapS};
    padding: 0.5em 0;
    &.red {
      border-color: ${red};
    }
    &.purple {
      border-color: ${purple};
    }
    &.blue {
      border-color: ${blue};
    }
    &.center {
      display: block;
      text-align: center;
    }
  }
  p {
    font-size: 1.6rem;
    margin-block-end: ${gapS};
  }
  ul {
    margin-block-end: ${gapS};
    padding-inline-start: ${gapS};
    li {
      font-size: 1.6rem;
      margin-block-end: ${gapXs};
    }
  }
  ol {
    list-style: none;
    figcaption {
      color: ${red};
      font-size: 1.6rem;
      font-weight: bold;
      margin: ${gapXs};
      text-align: center;
      small {
        color: #111;
        display: block;
        font-size: 1.2rem;
        font-weight: normal;
      }
    }
    &.flow {
      display: grid;
      gap: ${gapS};
      grid-template-columns: 1fr 1fr 1fr 1fr;
      @media (max-width: ${mediaM}) {
        grid-template-columns: 1fr 1fr;
      }
    }
    &.flow__scroll {
      display: flex;
      overflow: hidden;
      overflow-x: scroll;
      li {
        min-width: calc((${container} - ${gapS} - ${gapS}) / 5);
        .flow__scroll--step {
          background: ${red};
          border-bottom-right-radius: 30px;
          border-top-right-radius: 30px;
          color: #fff;
          font-size: 12px;
          font-weight: bold;
          display: block;
          margin: 0 ${gapXs} ${gapXs} 0;
          padding: 3px 3px 3px 1em;
        }
        figure {
          position: relative;
          &::after {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            content: '';
            display: inline-block;
            height: 40px;
            left: 65px;
            position: absolute;
            top: 45px;
            width: 90px;
            z-index: -1;
          }
          img {
            display: block;
            height: 80px;
            margin: 0 auto ${gapS};
            width: 80px;
          }
        }
      }
    }
  }
  .pain {
    list-style: none;
    margin: auto;
    max-width: ${mediaS};
    width: 100%;
    li {
      color: ${blue};
      font-weight: bold;
    }
  }
  .triangle {
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-top: 50px solid ${blueOp};
    height: 0;
    margin: -50px auto ${gapS};
    width: 0;
  }
  .col {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    p {
      font-size: 2rem;
      font-weight: bold;
      line-height: 40px;
      margin-inline-start: ${gapS};
    }
  }
  .button__cta {
    border: 1px solid #111;
    border-radius: 4px;
    color: #111;
    display: block;
    font-size: 2rem;
    font-weight: bold;
    margin: auto;
    max-width: ${mediaS};
    padding: 0.5em 1em;
    text-align: center;
    transition: 0.3s;
    width: 100%;
    &:hover {
      background: #111;
      color: #fff;
    }
  }
`;

const WorksPage = (props) => (
  <Layout location={props.location}>
    <SEO location={props.location} />
    <Wrap>
      <Heading text="OUR WORKS" position="right" />
      <WorkBox title="Sales Consulting." subTitle="営業コンサルティング" color="red" />
      <Description>
        <h3 className="red">放送受信料の契約/収納業務</h3>
        <p>日本放送協会（NHK）のパートナー企業として、放送受信料の契約および収納業務を行っています。</p>
        <p>
          未経験でも大丈夫、決して難しい仕事ではありません。経験豊富な先輩スタッフが「ゆっくり・丁寧」に指導いたしますのでご安心ください。少しでもご興味がある方は、是非お気軽にお問い合わせ・ご応募ください。
        </p>
        <h4 className="red">お仕事イメージ（1日の流れ）</h4>
        <ul>
          <li>競合他社は居ません！みなさんには担当地域をお渡しします。</li>
          <li> スマホ感覚の専用端末使用！地図内蔵のかんたん操作です。</li>
          <li>服装は基本自由！動きやすい格好が一番、スーツでなくとも構いません。</li>
        </ul>
        <p>以下はある1日における基本的な仕事の大まかな流れになりますのでご参考ください。</p>
        <ol className="flow">
          <li>
            <figure>
              <Image filename="flow1.png" />
              <figcaption>10:00～12:00出社</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <Image filename="flow2.png" />
              <figcaption>軽～くミーティング</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <Image filename="flow3.png" />
              <figcaption>
                担当地域での活動
                <small>
                  コツコツと実働7時間以上
                  <br />
                  休憩60分（30分×2回でもOK）
                </small>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <Image filename="flow4.png" />
              <figcaption>19:00～21:00帰社</figcaption>
            </figure>
          </li>
        </ol>
        <p>
          <small>※自動車、バイク持込みOK。自転車も貸与します。その他お気軽にご相談ください。</small>
        </p>
        <h3 className="red">ポスティング/広告/サンプリング業務</h3>
        <p>
          ハイクオリティで『反響』の高い、そして何より<strong>費用対効果の高いポスティングサービス</strong>
          をご提供しています。
        </p>
        <ul>
          <li>
            <strong>完全自社配布・GPS完備・翌日日報配信システムのポスティング</strong>
            により、全国のたくさんのクライアント様へたくさんの『反響』をお届けしております。
          </li>
          <li>
            <strong>下請けや丸投げなどの外部発注は一切いたしません。</strong>
          </li>
          <li>すべてを自社スタッフにて丁寧にポスティングいたします。</li>
          <li>町丁単位での配布地域の指定が可能なため、細やかな商圏に合わせたピンポイント配布が可能です。</li>
          <li>
            戸建や集合住宅・事業所の限定配布も可能なので、
            <strong>チラシを無駄にすることなく必要な地域に必要なだけポスティングを行いコストの削減が可能</strong>です。
          </li>
          <li>
            新聞の購読率の極めて低い若年層にも広告を打つことが可能なうえ、町丁単位の指定が可能なので商圏に合ったユーザーを限定し、イベントやキャンペーンなどの告知をすることが可能です。
          </li>
          <li>
            また大量に折り込まれる新聞折込と異なり、
            <strong>ユーザーが必ず手に取るため印象度や認知度が高まる効果</strong>があります。
          </li>
        </ul>
        <h4 className="red">ポスティングの流れ</h4>
        <ol className="flow__scroll">
          <li>
            <span className="flow__scroll--step">STEP1</span>
            <figure>
              <img src="/assets/flow5.svg" />
              <figcaption>ポスティング企画</figcaption>
            </figure>
          </li>
          <li>
            <span className="flow__scroll--step">STEP2</span>
            <figure>
              <img src="/assets/flow6.svg" />
              <figcaption>ポスティング販促物受け取り</figcaption>
            </figure>
          </li>
          <li>
            <span className="flow__scroll--step">STEP3</span>
            <figure>
              <img src="/assets/flow7.svg" />
              <figcaption>ポスティング配布計画指示</figcaption>
            </figure>
          </li>
          <li>
            <span className="flow__scroll--step">STEP4</span>
            <figure>
              <img src="/assets/flow8.svg" />
              <figcaption>チラシ配布実行</figcaption>
            </figure>
          </li>
          <li>
            <span className="flow__scroll--step">STEP5</span>
            <figure>
              <img src="/assets/flow9.svg" />
              <figcaption>アフターサポート</figcaption>
            </figure>
          </li>
        </ol>
      </Description>
      <WorkBox title="Business Consulting." subTitle="起業／副業コンサルティング" color="purple" />
      <Description>
        <h3 className="purple">ビジネスのお手伝い</h3>
        <p>会社設立・税務・労務・人材育成等各種相談、セミナー企画・運営等、格安でお手伝いします。</p>
        <p>
          これからの人生を、自分の力で切り開く、そんな時代が来ました。リタイヤー、サラリーマン、OL、フリーター、主婦、学生の皆さん！これからの人生を、自分の力で切り開く、そんな時代が来ました。
          時間は待ってくれません。
        </p>
        <p>
          老若男女を問わず、今からスタートアップ出来ます。 当社は、独自ネットワークと幅広い人脈、豊富な経験を活かし、
          そんな皆様のスタートアップを、全力でお手伝いします。
        </p>
      </Description>
      <WorkBox title="Office Work." subTitle="事務／業務運営代行" color="blue" />
      <Description>
        <h3 className="blue">事務作業の代行業</h3>
        <p>経理事務・労務管理事務・ホームページ管理・各種WEBサービス管理等、格安でお手伝いします。</p>
        <h4 className="blue center">こんなお悩みはありませんか？</h4>
        <ul className="pain">
          <li>
            『<span className="blue">自社の中心業務にもっと集中したい……</span>』
          </li>
          <li>
            『<span className="blue">ルーティン業務の品質を向上したい</span>』
          </li>
          <li>
            『<span className="blue">外部の専門的ノウハウを活用してみたい……</span>』
          </li>
          <li>
            『<span className="blue">コスト削減をしたいけどどうすればいいかわからない……</span>』
          </li>
        </ul>
        <div className="triangle" />
        <div className="col">
          <Logo />
          <p>にお任せ!!</p>
        </div>
        <Link to="/contact" className="button__cta">
          お問い合わせはこちらから
        </Link>
      </Description>
    </Wrap>
  </Layout>
);

export default WorksPage;
