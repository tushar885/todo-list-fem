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
      backgroundImage: {
        bgd_mob: "url('./images/bg-mobile-dark.jpg')",
        bgl_mob: "url('./images/bg-mobile-light.jpg')",
        bgd_desk: "url('./images/bg-desktop-dark.jpg')",
        bgl_desk: "url('./images/bg-desktop-light.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
