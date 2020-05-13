/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const tw = require("twin.macro")

const { getInitialColorModeString } = require("./src/getInitialColorMode")
const MagicScriptTag = () => {
  let codeToRunOnClient = `
(function() {

  ${getInitialColorModeString}

  const colorMode = getInitialColorMode();
  const root = document.documentElement;

  const {color: lightModeText} = ${JSON.stringify(tw`text-gray-900`)}
  const {color: darkModeText} = ${JSON.stringify(tw`text-gray-100`)}
  const {color: lightModeBackground} = ${JSON.stringify(tw`text-gray-100`)}
  const {color: lightModeBackgroundOff} = ${JSON.stringify(tw`text-gray-200`)}
  const {color: darkModeBackground} = ${JSON.stringify(tw`text-gray-900`)}
  const {color: darkModeBackgroundOff} = ${JSON.stringify(tw`text-gray-800`)}
  const {color: lightModePrimary} = ${JSON.stringify(tw`text-red-400`)}
  const {color: darkModePrimary} = ${JSON.stringify(tw`text-green-700`)}
  
  window.COLORS = {
    light: {
      text:lightModeText,
      background:lightModeBackground,
      backgroundOff:lightModeBackgroundOff,
      primary:lightModePrimary
    },
    dark: {
      text:darkModeText,
      background:darkModeBackground,
      backgroundOff:darkModeBackgroundOff,
      primary:darkModePrimary
    },
  }
  root.style.setProperty(
    '--color-text',
    colorMode === 'light'
      ? COLORS.light.text
      : COLORS.dark.text
  );
  root.style.setProperty(
    '--color-background',
    colorMode === 'light'
      ? COLORS.light.background
      : COLORS.dark.background
  );
  root.style.setProperty(
    '--color-background-off',
    colorMode === 'light'
      ? COLORS.light.backgroundOff
      : COLORS.dark.backgroundOff
  );
  root.style.setProperty(
    '--color-primary',
    colorMode === 'light'
      ? COLORS.light.primary
      : COLORS.dark.primary
  );
  root.style.setProperty(
    "--bg-opacity-dark",
    colorMode === "light" ? "0" : "0.5"
  )
  root.style.setProperty(
    "--bg-opacity-light",
    colorMode === "light" ? "0.5" : "0"
  )

  root.style.setProperty('--initial-color-mode', colorMode);
})()`
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(<MagicScriptTag />)
}
