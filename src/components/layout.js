import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {ThemeProvider} from "styled-components"

import Header from "./Header"

import theme from "../styles/theme"
import GlobalStyle from "../styles/global"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    </ThemeProvider>
  )
}

export default Layout
