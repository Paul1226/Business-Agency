/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#7EDAD2',
				'secondary': '#424241',
				'third': '#909090',
			},
			fontFamily: {
				bebas: ['Bebas Neue', 'cursive'],
				poppins: ['Poppins', 'sans-serif'],
			},
			gridTemplateColumns: {
				'4s': 'repeat(auto-fill, minmax(250px, 1fr))',
			},
			boxShadow: {
				'boxs': '0 0 10px 6px #90909020',
			},
		},
	},
	plugins: [],
}
