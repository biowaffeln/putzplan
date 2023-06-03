import radix from './radix';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			...radix
		},
		fontFamily: {
			hand: ['"Pangolin"', 'sans-serif']
		}
	}
};
