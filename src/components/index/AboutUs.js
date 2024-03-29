import React from 'react';
import styled from 'styled-components';

import Heading2 from '../Heading2';
import Iframe from '../Iframe';
import Table from '../Table';

const mediaM = (props) => props.theme.media.m;
const container = (props) => props.theme.container.main;
const gapXxl = (props) => props.theme.gap.xxl;

const Wrap = styled.section`
  margin-block-end: ${gapXxl};
`;

const Container = styled.div`
  margin: auto;
  max-width: ${container};
  width: 100%;
`;

const Col = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${mediaM}) {
    grid-template-columns: 1fr;
  }
`;

const AboutUs = () => (
  <Wrap>
    <Heading2 position="right" text="ABOUT US" />
    <Container>
      <Col>
        <Table>
          <tr>
            <th>会社名</th>
            <td>株式会社ビジネスパートナーズ</td>
          </tr>
          <tr>
            <th>住所</th>
            <td>
              <address>
                171-0014
                <br />
                東京都豊島区池袋2－17－8
                <br />
                池袋西口ANNEX403
              </address>
            </td>
          </tr>
          <tr>
            <th>代表取締役</th>
            <td>宮本　正樹</td>
          </tr>
          <tr>
            <th>資本金</th>
            <td>900万</td>
          </tr>
          <tr>
            <th>電話番号</th>
            <td>03-5985-5520</td>
          </tr>
          <tr>
            <th>FAX番号</th>
            <td>03-5985-5521</td>
          </tr>
          <tr>
            <th>顧問</th>
            <td>
              ベリーベスト法律事務所、
              <br />
              田口通税理士事務所、
              <br />
              アクト労務経営センター
            </td>
          </tr>
          <tr>
            <th>古物商許可証</th>
            <td>第305502118232号取得</td>
          </tr>
        </Table>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.815180904257!2d139.7077117153831!3d35.730763634860956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d32b0a8d8c5%3A0x521ee7f666092148!2z5aSp57-U44Kq44OV44Kj44K55rGg6KKL6KW_5Y-jQU5ORVg!5e0!3m2!1sja!2sjp!4v1604550878286!5m2!1sja!2sjp" />
      </Col>
    </Container>
  </Wrap>
);

export default AboutUs;
