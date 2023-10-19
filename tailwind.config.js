/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			maxWidth: {
				1920: '1920px',
			},
			fontFamily: {
				barlow: ['Barlow', 'sans-serif'],
			},
			spacing: {
				58: '58.6825rem;',
				'1-6': 'calc(100% - 6.70938rem);',
				6: '6.70938rem;',
				1.2: '1.26725rem',
				9.3: '9.31694rem;',
			},
			borderRadius: {
				medium: '0.4375rem;',
				large: '10px',
			},
			backgroundImage: (theme) => ({
				'gradient-scissors':
					'radial-gradient(circle, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
				'gradient-paper':
					'radial-gradient(circle, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
				'gradient-rock':
					'radial-gradient(circle, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
				'gradient-lizard':
					'radial-gradient(circle, hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
				'gradient-cyan':
					'radial-gradient(circle, hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
				'gradient-white':
					'radial-gradient(53.68% 53.68% at 50% 52.8%, #E6E6E6 86.46%, #B0BCE4 88.54%, #B0BCE4 100%);',
				'gradient-win':
					'radial-gradient(50% 50% at 50% 50%, rgba(250, 250, 250, 0.80) 0%, rgba(250, 250, 250, 0.80) 25.42%, rgba(250, 250, 250, 0.60) 25.43%, rgba(250, 250, 250, 0.60) 51.97%, rgba(250, 250, 250, 0.40) 51.98%, rgba(250, 250, 250, 0.40) 76.46%, rgba(250, 250, 250, 0.20) 76.47%, rgba(250, 250, 250, 0.20) 100%);					',
			}),
			colors: {
				dark: 'hsl(229, 25%, 31%)',
				score: 'hsl(229, 64%, 46%)',
				outline: 'hsl(217, 16%, 45%)',
				modal: 'rgba(0, 0, 0, 0.75);',
			},
			boxShadow: {
				'big-inner': 'inset 0 -5px 0 0 rgba(0, 0, 0, 0.20)',
				'small-inner': 'inset 0 5px 0 0 rgba(0, 0, 0, 0.20)',
				'score-shadow': ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
			},
			dropShadow: {
				big: ' 0px 4px 4px 0px rgba(0, 0, 0, 1)',
			},
			keyframes: {
				'custom-ping': {
					'0%': { transform: 'scale(1)', opacity: 1 },
					'100%': { transform: 'scale(4)', opacity: 0 },
				},
				'slide-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(8rem)' },
				},
				'slide-left': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-8rem)' },
				},
			},
			animation: {
				'custom-ping': 'custom-ping 1s 2s cubic-bezier(0, 0, 0.2, 1) infinite',
				'slide-right': 'slide-right 1s 2s forwards',
				'slide-left': 'slide-left 1s 2s forwards',
			},
		},
	},
	plugins: [],
};
