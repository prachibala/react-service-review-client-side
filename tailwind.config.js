/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			spacing: {
				500: "500px",
			},
		},
	},
	plugins: [require("daisyui"), require("tailwind-scrollbar")],
	daisyui: {
		themes: ["bumblebee"],
	},
};
