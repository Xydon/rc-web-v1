/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				rcBlue: "#4D7FED",
			},
			fontFamily: {
				sans: "Inter, sans-serif",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
