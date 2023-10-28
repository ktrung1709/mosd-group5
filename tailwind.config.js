/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#080A1A",
        subMain: "#F20000",
        dry: "#0B0F29",
        star: "#FFB000",
        text: "#C0C0C0",
        border: "#4b5563",
        dryGray: "#E0D5D5",
      },

      height: {
        header: "560px",
        rate: "400px",
      },
<<<<<<< HEAD
=======
    },
  },
>>>>>>> 3342fa489fd697dccdd8acb277d0c7adc2659d99

      fontSize: {
        h1: "2.6rem",
      },

      screens: {
        xs: "475px",
      },
<<<<<<< HEAD
    },
  },
=======
>>>>>>> 3342fa489fd697dccdd8acb277d0c7adc2659d99
  plugins: [import("@tailwindcss/line-clamp")],
};
