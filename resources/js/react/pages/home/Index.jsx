import AboutGallery from './AboutGallery'
import AboutSection from './AboutSection'
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
		</>
	)
}

export default Index
