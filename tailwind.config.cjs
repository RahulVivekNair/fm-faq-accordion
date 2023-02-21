const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        desBlue: "hsl(238, 29%, 16%)",
        softRed: "hsl(14, 88%, 65%)",
        softViolet: "hsl(273, 75%, 66%)",
        softBlue: "hsl(240, 73%, 65%)",
        veryDarkBlue: "hsl(237, 12%, 33%)",
        darkBlue: "hsl(240, 6%, 50%)",
        lightBB: "hsl(240, 5%, 91%)",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
    },
  },

  plugins: [],
};

module.exports = config;
