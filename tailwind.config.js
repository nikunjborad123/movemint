/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "branded-blue": "#0D70BC",
        "sky-blue": "#88E2E8",
        dark: "#191A1F",
      },
      backgroundImage: (theme) => ({
        "gradient-primary": `linear-gradient(to right, ${theme(
          "colors.branded-blue"
        )}, ${theme("colors.sky-blue")})`,
        "login-bg": `linear-gradient(180deg, ${theme(
          "colors.branded-blue"
        )} 0%, rgba(0, 0, 0, 0) 62.5%, #191A1F 97%), url('/assets/images/login-bg.jpg')`,
      }),
    },
  },
  plugins: [],
};
