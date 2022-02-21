module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // font
      fontFamily: {
        test: "'DM Mono', 'serif'",
        proxima: "'Proxima', 'serif'",
      },
      // grid
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
