/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				orange: "#DB8763",
				blue: "#B4C0D5",
				purple: "#411F89",
				offwhite: "#F5F5F5",
				gray1: "#D9D9D9",
				gray2: "#747BA7",
				gray3: "#342B2B",
			},
			height: {
				'80vh': '80vh',
			},
			fontFamily: {
				'sans': ['Lato', ...defaultTheme.fontFamily.sans],
				'serif': ['Bebas Neue', ...defaultTheme.fontFamily.serif],
			},
			keyframes: {
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'15%': { transform: 'rotate(14.0deg)' },
					'30%': { transform: 'rotate(-8.0deg)' },
					'40%': { transform: 'rotate(14.0deg)' },
					'50%': { transform: 'rotate(-4.0deg)' },
					'60%': { transform: 'rotate(10.0deg)' },
					'70%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' },
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
			}
		},
		container: {
			center: true,
		},
		backgroundImage: {
			'hero-pattern': "url('/assets/hero-patteren.svg')",
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
