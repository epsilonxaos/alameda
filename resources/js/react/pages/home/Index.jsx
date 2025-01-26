import AboutGallery from './AboutGallery'
import AboutSection from './AboutSection'
import Amenities from './Amenities/Amenities'
import Croquis from './Croquis'
import MainBanner from './MainBanner'
import Video from './Video'

const Index = () => {
	return (
		<>
			<MainBanner />
			<AboutSection />
			<AboutGallery />
			<Croquis />
			<Video />
			<Amenities />
		</>
	)
}

export default Index
