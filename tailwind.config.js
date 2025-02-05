export default {
	content: [
		'./public/index.php',
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/**/*.blade.php',
		'./resources/js/react/components/**/*.{js,jsx,ts,tsx}',
		'./resources/js/react/components/*.{js,jsx,ts,tsx}',
		'./resources/js/react/modules/**/*.{js,jsx,ts,tsx}',
		'./resources/js/react/modules/*.{js,jsx,ts,tsx}',
		'./resources/js/react/pages/**/*.{js,jsx,ts,tsx}',
		'./resources/js/react/pages/*.{js,jsx,ts,tsx}',
		'./resources/js/react/*.{js,jsx,ts,tsx}',
		'./resources/js/*.{js,jsx,ts,tsx}',
		'./resources/*.{js,jsx,ts,tsx}',
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
