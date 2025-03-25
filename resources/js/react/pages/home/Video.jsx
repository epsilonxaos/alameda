import Container from '@components/Container'
import { Play } from '@components/Icons'
import IMG_Cover from '@img/video-cover.webp'

import FsLightbox from 'fslightbox-react'
import { useState } from 'react'

const Video = () => {
	const [toggler, setToggler] = useState(false)

	return (
		<div className='bg-azulRey'>
			<Container>
				<div className='relative'>
					<img
						src={IMG_Cover}
						className='min-h-[300px] w-full object-cover object-center'
						alt=''
					/>
					<div className='absolute inset-0 flex items-center justify-center'>
						<button
							onClick={() => setToggler(!toggler)}
							type='button'>
							<Play className='size-9 lg:size-16' />
						</button>
					</div>
				</div>
			</Container>

			<FsLightbox
				toggler={toggler}
				autoplay
				sources={['/videos/alameda.mp4']}
			/>
		</div>
	)
}

export default Video
