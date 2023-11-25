/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      backgroundImage: {
        img1: "url('/src/img/WhatsApp Image 2023-04-18 at 03.49.40.jpeg')",
        img2: "url('/src/img/WhatsApp Image 2023-04-18 at 03.49.41.jpeg')",
        img3: "url('/src/img/WhatsApp Image 2023-04-18 at 03.49.41 (1).jpeg')",
        img4: "url('/src/img/WhatsApp Image 2023-04-18 at 03.49.41 (2).jpeg')",
        img5: "url('/src/img/PigGame.png')",
      },
    },
  },
  plugins: [],
};
