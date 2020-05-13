/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./styles.css"
import { ThemeProvider } from "emotion-theming"
import getInitialColorMode from "../getInitialColorMode"
import tw from "twin.macro"
import useLocalStorage from "../hooks/useLocalStorage"

const theme = {
  colors: {
    primary: "hotpink",
  },
}
declare global {
  interface Window {
    COLORS: {
      light: {
        text: string
        background: string
        primary: string
        backgroundOff: string
      }
      dark: {
        text: string
        background: string
        primary: string
        backgroundOff: string
      }
    }
  }
}

const Layout = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined)

  function setColorMode(newValue) {
    const root = window.document.documentElement
    // 1. Update React color-mode state
    rawSetColorMode(newValue)
    // 2. Update localStorage
    localStorage.setItem("color-mode", newValue)
    // 3. Update each color
    root.style.setProperty(
      "--color-text",
      newValue === "light" ? window.COLORS.light.text : window.COLORS.dark.text
    )
    root.style.setProperty(
      "--color-background",
      newValue === "light"
        ? window.COLORS.light.background
        : window.COLORS.dark.background
    )
    root.style.setProperty(
      "--color-background-off",
      newValue === "light"
        ? window.COLORS.light.backgroundOff
        : window.COLORS.dark.backgroundOff
    )
    root.style.setProperty(
      "--color-primary",
      newValue === "light"
        ? window.COLORS.light.primary
        : window.COLORS.dark.primary
    )
    console.log(colorMode)
    root.style.setProperty(
      "--bg-opacity-dark",
      newValue === "light" ? "0" : "0.5"
    )
    root.style.setProperty(
      "--bg-opacity-light",
      newValue === "light" ? "0.5" : "0"
    )
    root.style.setProperty("--initial-color-mode", newValue)
  }

  React.useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    )

    setColorMode(initialColorValue.replace(/"/g, ""))
  }, [])

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
    <ThemeProvider theme={{ ...theme, colorMode, setColorMode }}>
      <div className={`min-h-screen flex flex-col z-10`}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={`flex-grow my-10 flex flex-col relative`}>
          {children}
        </main>
        <footer css={tw`z-10 text-center`}>© {new Date().getFullYear()}</footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
