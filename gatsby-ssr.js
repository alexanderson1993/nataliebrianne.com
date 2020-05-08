/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem("color-mode")
  const hasPersistedPreference = typeof persistedColorPreference === "string"
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const hasMediaQueryPreference = typeof mql.matches === "boolean"
  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light"
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return "light"
}

const MagicScriptTag = () => {
  let codeToRunOnClient = `
(function() {

  ${getInitialColorMode.toString()}

  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.classList.add(colorMode === "dark" ? "mode-dark" : "")
})()`
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(<MagicScriptTag />)
}
