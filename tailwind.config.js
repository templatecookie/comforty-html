/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./**/*.{html,js}", "index.html"],
	theme: {
		extend: {},
		fontFamily: {
			display: ["'Inter', sans-serif"],
			display2: ["'DM Sans', sans-serif"],
		},
		container: {
			center: true,
			padding: "0rem",
			screens: {
				sm: "600px",
				md: "728px",
				lg: "920px",
				xl: "980px",
				"2xl": "1320px",
        		"3xl": "1536px",
			},
		},
		colors: {
			"gray-white": "#FFFFFF",
			"gray-black": "#272343",
			"dark-gray": "#636270",
			"bg-breadcum": "#F0F2F3",
			accents: "#029FAE",
			"dark-accents": "#007580",
			"off-white": "#F0F2F3",
			transparent: "transparent",
			white: "#FFFFFF",
			black: "#000000",
			secondary: "#272343",
			"grayscales-500": "#F0F2F3",
			"grayscales-700": "#E1E3E6",
			"grayscales-900": "#636270",
			"dark-accents": "#007580",
			"white-50": "rgba(255, 255, 255, 0.7)",
		},
	},
	plugins: [],
};
