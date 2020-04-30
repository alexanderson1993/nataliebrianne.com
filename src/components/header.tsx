import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Wordmark from "./wordmark"
import tw from "twin.macro"
import { Link } from "gatsby"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const NavLink = props => {
  return (
    <Link
      {...props}
      css={tw`text-2xl mx-2 hover:text-gray-600 duration-75 transition-colors`}
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
      css={
        collapse
          ? tw`sticky top-0 flex justify-between items-center h-20 border-gray-400 border-b transition-all duration-500`
          : tw`sticky top-0 flex justify-between items-center h-24 border-transparent transition-all duration-500`
      }
    >
      <div css={tw`h-full flex items-center`}>
        <Logo css={tw`h-full m-4 p-2`} />
        <Wordmark css={tw`h-full py-5`} />
      </div>
      <nav css={tw`flex items-center mr-4`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
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
