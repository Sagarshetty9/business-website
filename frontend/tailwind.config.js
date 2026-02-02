export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#1A1F16",
          surface: "#345830",
        },
        green: {
          600: "#345830",
          500: "#4A7856",
          300: "#94ECBE",
        },
      },
    },
  },
}
