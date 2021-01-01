import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Heading2 from '../components/Heading2';
import Heading3 from '../components/Heading3';
import Table from '../components/Table';

const gapS = (props) => props.theme.gap.s;
const gapXxl = (props) => props.theme.gap.xxl;
const container = (props) => props.theme.container.main;

const Wrap = styled.article`
  margin: ${gapXxl} 0;
`;

const Container = styled.div`
  font-size: 1.6rem;
  margin: 0 auto ${gapS};
  max-width: ${container};
  padding: 0 ${gapS};
  width: 100%;
  p {
    font-size: 1.6rem;
  }
`;

const RecruitmentPage = (props) => {
  const recruitmentTitle = '求人情報';
  const recruitmentDescription = '株式会社ビジネスパートナーズの求人情報のページです';
  const tableContent1 = [
    { h: '募集職種', d: '営業（正社員で働きたい）' },
    { h: '応募資格', d: '年齢・学歴・経験不問' },
    { h: '業務内容', d: 'NHK受信料の契約・収納業務・新電力コンサル営業・ポスティングコンサル営業' },
    { h: '勤務地', d: '	東京23区およびその周辺地域' },
    { h: '勤務時間', d: '【1】10:00～19:00　【2】11:00～20:00　【3】12:00～21:00　※休憩60分' },
    { h: '休日・休暇', d: '年間休日100日（GW・夏季・年末年始休暇、有給休暇）、平均月8日（当社カレンダーによる）' },
    {
      h: '給与',
      d:
        '260,000円＋インセンティブ（上限無し）※経験・能力を考慮、経験者優遇（業界経験者は特に優遇します！給与別途相談します。）　※試用期間3ヶ月～６ヶ月：230,000円＋インセンティブ（上限無し）',
    },
    {
      h: '特記事項	',
      d:
        '賞与（年2回）、交通費支給（2万円まで）、家族手当、退職時慰労金、寮完備（入社時応相談）、各種親睦会・健康増進補助、社員旅行、各種社会保険加入など',
    },
    {
      h: '応募方法	',
      d:
        'まずはお電話かお問い合わせフォームでご連絡ください。面接日時を調整させていただきます。なお面接の際は、履歴書（写真貼付）をご持参ください。ご不明な点などございましたらお気軽にお問い合わせください。',
    },
  ];

  const tableContent2 = [
    { h: '募集職種	', d: '営業サポート（日数、時間で働きたい）' },
    { h: '応募資格', d: '学歴・経験不問' },
    { h: '業務内容', d: 'NHK受信料の契約・収納業務・新電力コンサル営業・ポスティングコンサル営業' },
    { h: '勤務地', d: '東京23区およびその周辺地域' },
    { h: '勤務時間', d: '週2日～・4H／日～（ご相談可能）' },
    { h: '給与', d: '完全歩合・時給' },
    { h: '特記事項', d: '交通費支給（実費）' },
    {
      h: '応募方法',
      d:
        'まずはお電話かお問い合わせフォームでご連絡ください。面接日時を調整させていただきます。なお面接の際は、履歴書（写真貼付）をご持参ください。ご不明な点などございましたらお気軽にお問い合わせください。',
    },
  ];

  return (
    <Layout location={props.location}>
      <SEO location={props.location} pageTitle={recruitmentTitle} pageDescription={recruitmentDescription} />
      <Wrap>
        <Heading2 text="RECRUITMENT" />
        <Container>
          <p>
            担当エリアのお客様（個人・事業所）に訪問し、新規契約・住所変更などの手続きや、受信料の集金をするお仕事になります。
            未経験でも大丈夫、決して難しい仕事ではありません
            。経験豊富な先輩スタッフが「ゆっくり・丁寧」に指導いたしますのでご安心ください。少しでもご興味がある方は、是非お気軽にお問い合わせ・ご応募ください。
          </p>
          <Heading3 text="募集要項" className="green" />
        </Container>
        <Table border>
          {tableContent1.map((t) => (
            <tr key={t.h}>
              <th>{t.h}</th>
              <td>{t.d}</td>
            </tr>
          ))}
        </Table>
        <Table border>
          {tableContent2.map((t) => (
            <tr key={t.h}>
              <th>{t.h}</th>
              <td>{t.d}</td>
            </tr>
          ))}
        </Table>
      </Wrap>
    </Layout>
  );
};

export default RecruitmentPage;
