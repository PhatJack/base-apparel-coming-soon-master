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
				"gradient-135": "linear-gradient(135deg,hsl(0, 80%, 86%),hsl(0, 74%, 74%))",
				"gradient-35" : "linear-gradient(35deg,hsl(0, 80%, 86%) 50%,hsl(0, 74%, 74%) 100%)"
			},
			fontFamily: {
				"josefin-sans": "Josefin Sans"
			},
		},
	},
	plugins: [],
}