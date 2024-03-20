/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        monteCario: {
          '50': "#f2fbfa",
          '100': "#d3f4ef",
          '200': "#a6e9e1",
          '300': "#7edad2",
          '400': "#44bdb6",
          '500': "#2ba19c",
          '600': "#20817f",
          '700': "#1d6867",
          '800': "#1c5253",
          '900': "#1b4646",
          '950': "#0a2829",
        },
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "4s": "repeat(auto-fill, minmax(250px, 1fr))",
      },
      boxShadow: {
        boxs: "0 0 10px 6px #90909020",
        boxs2: "0 0 10px 6px #2ba19c30",
      },
	  backgroundImage:{
		gradientCard: 'linear-gradient(to top left, #2ba19c 0%, #7edad2 100%, #d3f4ef 100% )',
	  }
    },
  },
  plugins: [],
};
