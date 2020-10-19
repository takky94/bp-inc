import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, p{
    line-height: 1.5;
  }
  @media(max-width: 479px){
    .sp__none{
      display: none;
    }
  }
  @media(max-width: 979px){
    .tab__none{
      display: none;
    }
  }
  @media (min-width: 980px){
    .pc__none{
      display: none;
    }
  }
`

export default GlobalStyle
