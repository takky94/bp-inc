import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html{
  font: 62.5% 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif;
  scroll-behavior: smooth;
}
h1, h2, h3, h4, h5, p{
  line-height: 1.5;
}
a{
  color: #3366ff;
  text-decoration: none;
}
img{
  max-width: 100%;
}
p{
  font-size: 1.4rem;
}
@media(max-width: 479px){
  .sp__none{
    display: none !important;
  }
}
@media(min-width: 480px){
  .pc__none{
    display: none !important;
  }
}
`;

export default GlobalStyle;
