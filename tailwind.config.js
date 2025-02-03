export const content = [
	'./public/index.php',
	'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
	'./storage/framework/views/*.php',
	'./resources/**/*.blade.php',
	'./resources/**/*.{js,ts,jsx,tsx}',
	'./resources/js/react/**/*.{js,ts,jsx,tsx}',
	'./resources/js/react/**/**/*.{js,ts,jsx,tsx}',
	'./resources/js/react/**/**/**/*.{js,ts,jsx,tsx}',
	'./node_modules/flowbite/**/*.js',
]
export const darkMode = 'class'
export const theme = {
	extend: {
		colors: {
			menta: '#6FD0A5',
			azulMarino: '#005677',
			azulRey: '#003A5D',
			verdeLimon: '#D3D655',
		},
		fontFamily: {
			gotham: ['Gotham', 'sans-serif'],
		},
	},
}
export const plugins = [require('@tailwindcss/forms'), require('flowbite/plugin')]
