/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          taskPending: "var(--color-task-pending)",
          constant: "var(--color-text-constant)",
        },
      },
      backgroundColor: {
        skin: {
          bodyContainer: "var(--color-bg-body)",
          taskContainer: "var(--color-bg-task)",
        },
      },
      colors: {
        skin: {
          hoverBg: "var(--color-text-constant)",
          baseBorderOrTaskCompleted: "var(--color-text-base)",
        },
      },
    },
  },
  plugins: [],
};
