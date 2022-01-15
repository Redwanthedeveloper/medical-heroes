module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        maxWidth: {
          "2xl": "1170px",
        },
      },
      colors: {
        primary: "#005aff",
        secondary: "#4e6f97",
      },

      fontFamily: {
        heading: ['"Sofia Pro"'],
        body: ["Sen"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "@screen 2xl": {
            maxWidth: "1170px",
          },
        },
      });
    },
    //  end
  ],
};
