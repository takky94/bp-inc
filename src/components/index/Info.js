import React from 'react';
import Image from '../Image';
import styled from 'styled-components';

const container = (props) => props.theme.container.main;
const gapS = (props) => props.theme.gap.s;
const gapXxl = (props) => props.theme.gap.xxl;

const Wrap = styled.div`
  margin: 0 auto ${gapXxl};
  max-width: ${container};
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  background: #fff;
  border: 2px solid #111;
  display: grid;
  font-size: 1.4rem;
  gap: 20px;
  grid-template-columns: 70px 1fr;
  margin: 0 ${gapS};
  padding: ${gapS};
  .leagal,
  .npo {
    img {
      object-fit: contain !important;
    }
  }
  .leagal {
    img {
      left: 50% !important;
      transform: translateX(-50%);
      width: 30px !important;
    }
  }
  .npo {
    img {
      width: 70px !important;
    }
  }
`;

const Info = () => (
  <Wrap>
    <Container>
      <Image filename="leagal.png" className="leagal" alt="ベリーベスト法律事務所ロゴ" />
      <p>株式会社ビジネスパートナーズはベリーベスト法律事務所と顧問契約を締結してます。</p>
      <Image filename="npo.jpg" className="npo" alt="認定特定非営利活動法人カタリバロゴ" />
      <p>株式会社ビジネスパートナーズは認定特定非営利活動法人カタリバの活動を支援しています。</p>
    </Container>
  </Wrap>
);

export default Info;
