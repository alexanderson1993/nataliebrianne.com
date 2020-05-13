import React from "react"
import { useTheme } from "emotion-theming"
import { FiMoon, FiSun } from "react-icons/fi"

const DarkToggle = () => {
  const { colorMode, setColorMode } = useTheme()

  return (
    <div
      className="text-2xl mx-6"
      onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
    >
      {colorMode === "dark" ? <FiMoon /> : <FiSun />}
    </div>
  )
}

export default DarkToggle
