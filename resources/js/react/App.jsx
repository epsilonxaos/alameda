import { AnimatePresence } from 'framer-motion'

import { Route, Routes, useLocation } from 'react-router-dom'

import Loading from './components/Loading'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import Footer from './modules/Footer'
import Header from './modules/Header'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/home/Index'

export default function App() {
	const location = useLocation()

	// if (state.loading) return <Loading />

	return (
		<>
			<Header />

			<AnimatePresence mode='wait'>
				<ScrollToTop />

				<Routes
					location={location}
					key={location.pathname}>
					<Route
						index
						element={
							<PageTransition>
								<Home />
							</PageTransition>
						}
					/>

					<Route
						path='*'
						element={<PageNotFound />}
					/>
				</Routes>
			</AnimatePresence>

			<Footer />
		</>
	)
}
