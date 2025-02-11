import Container from '@components/Container'
import Text from '@components/Text'
import IMGAbout from '@img/img-about.jpg'

const AboutSection = () => {
	return (
		<Container className='pt-28 text-center lg:pt-36'>
			<div className='mx-auto mb-10 max-w-[660px] lg:mb-20'>
				<Text.Title>
					Exclusividad, diseño y confort, un refugio acogedor para ti en la mejor zona de Mérida, Yucatán desde
					$3,062,000 mxn.
				</Text.Title>

				<Text>
					En el corazón de una de las zonas de mayor tradición en Mérida nace una nueva privada residencial con un
					espíritu moderno y actual, en la que el diseño y la funcionalidad de espacios definen un estilo de vida único
					en la zona. <span className='font-bold'>¡Sorpréndete con Alameda City Homes!</span>
				</Text>
			</div>

			<img
				className='max-h-[615px] w-full object-cover object-center'
				src={IMGAbout}
				alt='About banner'
			/>
		</Container>
	)
}

export default AboutSection
