import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		spacing: {
			xs:"10px",
			sm: "12px",
			md: "16px",
			lg: "20px",
			xl: "24px",
			xxl: "32px",
			xxxl:"80px",
			giant:"120px"
		},
    
		width:{
			lg:"800px",
			full:"100%"
		},
		height:{
			lg:"64px"
		},
		borderRadius: {
			xs:"4px",
			sm: "10px",
			md: "16px",
			lg: "20px",
			pill: "50px",
		},
		opacity:{
			lg:"0.8",
		},
		boxShadow:{
			md:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
			lg:"0px 2px 6px 0px rgba(0, 0, 0, 0.25)"
		},
		fontSize:{
			sm:"24px",
			md:"32px",
			lg:"40px",
			xl:"48px",
		},
		colors: {
			neutral_light: "#D2D2D2",
			neutral_dark: "#2A2A28",
			primary_300:"#9022D4",
			primary: "#62029E",
			primary_500:"#4F0380",
			primary_800:"#2E0348",
			secondary: "#7EF9F2",
			secondary_800:"#195E59",
			error: "#FA222F",
			success: "#BCFF00",
			danger: "#FFC701",
		},
		fontWeight: {
			thin: "100",
			hairline: "100",
			extralight: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			"extra-bold": "800",
			black: "900",
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"],
			},
		},
	},
	plugins: [],
};
export default config;
