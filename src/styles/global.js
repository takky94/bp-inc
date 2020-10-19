import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html{
  font-size: 62.5%;
}
h1, h2, h3, h4, h5, p{
  line-height: 1.5;
}
a{
  color: #3366ff;
  text-decoration: none;
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
