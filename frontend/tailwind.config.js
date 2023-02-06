/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#C7041B",
        yellow: "#FDCC49",
        grey: "#EDEDED",
        "light-grey": "#3D3D3D",
        "deep-blue" : "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE  7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainbow-blue":
          "linear-gradient(90deg, #00B5EE  14.53%, #FF45A4 69.36%, #FFBA00 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      }
    },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
  }
  },
  plugins: [],
}
