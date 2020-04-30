import React from "react"
import tw from "twin.macro"
import { css, keyframes } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"

const fadeUp = keyframes`
  from {
    transform: translate3d(0,100px,0) scale(3);
    filter: blur(50px);
    opacity:0;
  }
  to {
    transform: translate3d(0,0,0) scale(1);
    filter: blur(0px);
    opacity:1;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Coming Soon" />
    <div
      css={css`
        animation: ${fadeUp} 5s ease 1;
      `}
    >
      <div css={tw`relative`}>
        <Logo />
        <Logo
          css={css`
            filter: blur(20px);
            position: absolute;
            top: 0;
            z-index: -1;
            width: 100%;
            transform: scale(1.1);
          `}
        />
      </div>
      <h1 css={tw`text-white text-6xl font-bold text-center`}>Coming Soon</h1>
      <div
        css={css`
          ${tw`h-0`}
          border-radius: 50%;
          box-shadow: 0 -5px 50px 10px rgba(255, 255, 255, 0.25);
        `}
      ></div>
    </div>
  </Layout>
)

export default IndexPage
