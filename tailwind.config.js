const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./public/index.php',
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/**/*.blade.php',
		'./resources/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js',
	],
	darkMode: 'class',
	theme: {
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
	},

	plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
}
