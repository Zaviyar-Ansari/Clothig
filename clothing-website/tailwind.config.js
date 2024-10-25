/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#6F6A42",
        primary2: "#EFE8C2",
        primary3: "#224F34",
        primary4: "#00398F",
      },  
  },
  fontFamily: {
    poppins : ["Poppins"],
    Libre: ["Libre Baskerville"],
    
  },

  plugins: [],
}
}