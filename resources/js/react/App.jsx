import { AnimatePresence } from 'framer-motion'

import { Toaster } from 'react-hot-toast'
import { Route, Routes, useLocation } from 'react-router-dom'

import Loading from './components/Loading'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import Footer from './modules/Footer'
import Header from './modules/Header'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/home/Index'
import Thanks from './pages/thanks/Index'

export default function App() {
	const location = useLocation()

	// if (state.loading) return <Loading />

	return (
		<>
			<Toaster />
			<AnimatePresence mode='wait'>
				<ScrollToTop />

				<Routes
					location={location}
					key={location.pathname}>
					<Route
						index
						element={
							<PageTransition>
								<Header />
								<Home />
							</PageTransition>
						}
					/>
					<Route
						path='/thanks'
						element={
							<PageTransition>
								<Thanks />
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
