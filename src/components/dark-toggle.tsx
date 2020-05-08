import React from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const DarkToggle = () => {
  const [on, setOn] = useLocalStorage("color-mode", null)
  React.useEffect(() => {
    if (typeof window === "undefined") return
    if (on === "dark") {
      document.documentElement.classList.remove("mode-light")
      document.documentElement.classList.add("mode-dark")
    } else {
      document.documentElement.classList.add("mode-light")
      document.documentElement.classList.remove("mode-dark")
    }
  }, [on])
  return (
    <div onClick={() => setOn(on === "dark" ? "light" : "dark")}>
      {on ? "dark" : "light"}
    </div>
  )
}

export default DarkToggle
