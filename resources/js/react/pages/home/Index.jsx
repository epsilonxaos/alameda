import Contacto from '@pages/home/Contacto/Contacto'
import Cotizador from '@pages/home/Cotizador'
import GMaps from '@pages/home/GMaps'

import AboutGallery from './AboutGallery'
import AboutSection from './AboutSection'
import Amenities from './Amenities'
import Croquis from './Croquis'
import MainBanner from './MainBanner'
import Masterplan from './Masterplan'
import TownHouse from './TownHouse/TownHouse'
import Video from './Video'

const Index = () => {
	return (
		<>
			<MainBanner />
			<AboutSection />
			<AboutGallery />
			<Croquis />
			<Video />
			<TownHouse />
			<Masterplan />
			<Amenities />
			{/* <Cotizador /> */}
			{/* <GMaps /> */}
			<Contacto />
		</>
	)
}

export default Index
