/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"desatured-red": "hsl(0, 36%, 70%)",
				"soft-red": "hsl(0, 93%, 68%)",
				"dark-grayish-red": "hsl(0, 6%, 24%)"
			},
			backgroundImage: {
				"custom": "url('/images/bg-pattern-desktop.svg')",
				"hero": "url('/images/hero-desktop.jpg')",
				"custom-mobile": "url('/images/hero-mobile.jpg')",
				"gradient-135": "linear-gradient(135deg,hsl(0, 80%, 86%),hsl(0, 74%, 74%))",
				"gradient-35": "linear-gradient(35deg,rgba(248, 191, 191, 0.1) 0%,rgba(243, 165, 165, 0.052) 50%,rgba(238, 140, 140, 0.09) 100%) "
			},
			fontFamily: {
				"josefin-sans": "Josefin Sans"
			},
			gridTemplateColumns: {
				"custom-grid-column": ".71fr 2fr 0.85fr 2.615fr",
				"custom-grid-mobile": "30px 1fr 30px"
			},
			gridTemplateRows: {
				"custom-grid-row": "65px 35px 132px 188px 38px 72px 52px 60px 158px",
				"custom-grid-row-mobile": "30px 25px 30px 250px 65px 115px 25px 80px 40px 50px 82px"
			}
		},
	},
	plugins: [],
}