/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				text: "#E5EFFD",
				background: "#061221",
				primary: "#0E438E",
				secondary: "#297FF8",
				accent: "#297FF8",
				nav: "rgba(11, 11, 25, 0.6)",
			},

			backgroundImage: {
				"hero-pattern": "url('/src/assets/herobg.jpg')",
			},
		},
	},
	plugins: [],
};
