/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			colors: {
				dark: {
					DEFAULT: "#141317",
					100: "#29292C",
					700: "#21262D",
				},
				"soft-gray": "#F0F2F8",
			},
			boxShadow: {
				"card-inset": "#FFFFFF14 0px 0px 0px 1px inset",
				card: "#FFFFFF14 0px 0px 0px 1px",
				"card-hover": "#FFFFFF14 0px 0px 0px 5px",
			},
			borderRadius: {
				"32px": "32px",
			},
		},

		screens: {
			xs: "350px",
			sm: "640px",
			md: "800px",
			lg: "1201px",
			xl: "1400px",
			"2xl": "1600px",
		},
	},
	plugins: [],
};
