const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      spacing: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "active",
      "dark",
      "dark-hover",
      "dark-active",
    ],
    borderColor: [
      "responsive",
      "hover",
      "focus",
      "active",
      "dark",
      "dark-hover",
      "dark-active",
    ],
    textColor: [
      "responsive",
      "hover",
      "focus",
      "active",
      "dark",
      "dark-hover",
      "dark-active",
    ],
  },
  plugins: [require("tailwindcss-dark-mode")()],
}
