/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   /* 
    screens: {
      'xs': '390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', */
      screens: {
        'sm': {'min': '640px', 'max': '767px'},
      
  
        'md': {'min': '768px', 'max': '1023px'},

  
        'lg': {'min': '1024px', 'max': '1279px'},
 
  
        'xl': {'min': '1280px', 'max': '1535px'},

  
        '2xl': {'min': '1536px', 'max': '1791px'},

        '3xl': {'min': '1792px', 'max': '2047px'},

        '4xl': {'min': '2048px', 'max': '2800px'},

    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        "renk-2": "#FF9494",
        "renk-3": "#FFD1D1",
        "renk-4": "#FFE3E1",
        "renk-5": "#FFF5E4",
        "renk-6": "#FFE6E6",
        "renk-7": "#F2D1D1",
        "renk-8": "#DAEAF1",
        "renk-9": "#C6DCE4",
        "renk-10": "#B1B2FF",
        "renk-11": "#54BAB9",
        renk_12: "#dadae8",
        renk_13: "#bcbcd6",
        renk_14: "#0c0b0c",
        renk_15: "#f58a26",
        renk_16: "#282ef8",
        renk_17: "#5d4241",
        renk_18: "#6d7335",
        renk_19: "#a4a5af",
        renk_20: "#f0e7db",
      },
    },
  },
  plugins: [],
};
