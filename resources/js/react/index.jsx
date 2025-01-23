import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '../../css/app.css'
import '../../fonts/fonts.css'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<Routes>
			<Route
				path='/*'
				element={<App />}
			/>
		</Routes>
	</BrowserRouter>
)
