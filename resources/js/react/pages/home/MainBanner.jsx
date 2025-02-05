import { IsotipoCircle } from '@components/Icons'
import IMGbanner from '@img/main-banner.webp'

const MainBanner = () => {
	return (
		<div className='relative w-full'>
			<img
				className='max-h-[1200px] min-h-[400px] w-full object-cover object-center'
				src={IMGbanner}
				alt='Banner principal'
			/>

			<div className='absolute -bottom-10 flex w-full items-center justify-center lg:-bottom-[60px]'>
				<IsotipoCircle className='w-20 lg:w-[120px]' />
			</div>
		</div>
	)
}

export default MainBanner
