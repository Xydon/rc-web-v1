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
				rcBluePrimary: "#3C79FF",
				rcGreenPrimary: "#00A06B"
			},
			fontFamily: {
				sans: "Inter, sans-serif",
			},
			spacing: {
				"sys-9": 9,
				"sys-15": 15,
				"sys-24": 24,
				"sys-39": 39,
				"sys-63": 63,
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
