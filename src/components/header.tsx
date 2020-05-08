import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Wordmark from "./wordmark"
import { Link } from "gatsby"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { css } from "@emotion/core"
import DarkToggle from "./dark-toggle"

const NavLink = props => {
  return (
    <Link
      {...props}
      className={`text-2xl mx-2 hover:text-gray-600 duration-75 transition-colors`}
    ></Link>
  )
}
const Header = ({ siteTitle }) => {
  const [collapse, setCollapse] = React.useState(false)
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y > 0) {
        setCollapse(true)
      } else {
        setCollapse(false)
      }
    },
    [collapse],
    undefined,
    true
  )

  return (
    <header
      className={`sticky top-0 flex justify-between items-center border-b transition-all duration-500 ${
        collapse ? "h-20 border-gray-400" : "h-24 border-transparent"
      }`}
      css={css`
        background-color: rgba(26, 32, 44, 0.9);
      `}
    >
      <div className="h-full flex items-center">
        <Logo className="h-full m-4 p-2" />
        <Wordmark className="h-full py-5" />
      </div>
      <nav className="flex items-center mr-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <DarkToggle />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
