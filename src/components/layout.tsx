import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components";
import Header from "./header"
import "./layout.css"
import * as theme from "./theme";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
          <ThemeProvider theme={theme}>
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer>
          </footer>
        </div>
        </>
      </ThemeProvider>
    )}
  />
);

export default Layout
