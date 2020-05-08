import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
export default function HTML(props) {
  return (
    <html
      {...props.htmlAttributes}
      className="antialiased leading-relaxed dark:text-gray-100 text-gray-900 transition-colors duration-500"
      css={[
        css`
          font-family: SukhumvitSet, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
            "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol", "Noto Color Emoji";
        `,
      ]}
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body
        {...props.bodyAttributes}
        className="min-h-screen dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-900 transition-colors duration-500"
      >
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
