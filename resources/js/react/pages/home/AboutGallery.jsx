import Container from '@components/Container'
import Text from '@components/Text'
import IMG_cover1 from '@img/alameda/1.webp'
import IMG_cover2 from '@img/alameda/2.webp'
import IMG_cover3 from '@img/alameda/3.webp'
import IMG_cover4 from '@img/alameda/4.webp'
import IMG_cover5 from '@img/alameda/5.webp'

const AboutGallery = () => {
	return (
		<Container>
			<div className='mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-center lg:gap-8'>
				<div className='order-2 col-span-1 lg:order-1 lg:col-span-2'>
					<img
						src={IMG_cover1}
						className='aspect-square max-h-[680px] w-full object-cover object-center shadow-lg'
						alt='Alameda render 1'
					/>
				</div>
				<div className='order-1 col-span-1 lg:order-2 lg:px-4'>
					<Text.Title className='text-center text-menta lg:text-left'>
						Tu vida siempre está en movimiento, tienes tu propio estilo y sabes disfrutar al máximo cada momento.
					</Text.Title>

					<Text>
						Te presentamos <span className='font-bold'>Alameda City Homes</span>, una privada residencial desarrollada
						por Buenvi y diseñada justo para ti, con un espíritu moderno en la que el diseño y la funcionalidad definen
						cada uno de sus amplios espacios.
					</Text>
					<Text>
						<span className='font-bold'>Alameda City Homes</span> es una comunidad de viviendas tipo Town houses con un
						moderno estilo arquitectónico y acabados de primera, tipo residencial.
					</Text>
					<Text>Sus áreas comunes son perfectas para convivir en familia o amigos.</Text>
				</div>
			</div>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4'>
				<div className='col-span-1 hidden md:block' />
				<div className='col-span-1'>
					<img
						src={IMG_cover2}
						className='aspect-square w-full object-cover object-center shadow-lg'
						alt='Alameda render 2'
					/>
				</div>
				<div className='col-span-1'>
					<img
						src={IMG_cover3}
						className='aspect-square w-full object-cover object-center shadow-lg'
						alt='Alameda render 2'
					/>
				</div>
				<div className='col-span-1'>
					<img
						src={IMG_cover4}
						className='aspect-square w-full object-cover object-center shadow-lg'
						alt='Alameda render 2'
					/>
				</div>
				<div className='col-span-1'>
					<img
						src={IMG_cover5}
						className='aspect-square w-full object-cover object-center shadow-lg'
						alt='Alameda render 2'
					/>
				</div>
				<div className='col-span-1 hidden md:block' />
			</div>
		</Container>
	)
}

export default AboutGallery
