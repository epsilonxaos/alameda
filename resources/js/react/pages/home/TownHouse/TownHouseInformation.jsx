import Container from '@components/Container'
import { Check } from '@components/Icons'
import Text from '@components/Text'
import IMG_1 from '@img/townhouse/1.jpg'

const ListText = [
	'Dos plantas con dos recámaras, cada una con baño y clóset.',
	'Área para Home Office.',
	'1 baño de visitas.',
	'Amplios espacios excelentemente ventilados e iluminados.',
	'Amplios ventanales.',
	'Garaje para dos vehículos.',
	'3 jardines: frontal, en medio de la casa y trasero. Además área de lavado.',
	'Espacio para piscina opcional.',
	'Todos nuestros modelos vienen con preparación para salida de televisión satelital, paneles solares, servicio de voz y datos.',
	'Preparados para instalación de aire acondicionado en recámaras, sala y comedor.',
]

const TownHouseInformation = () => {
	return (
		<div className='bg-verdeLimon/50'>
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					<div className='col-span-1 mb-8 flex items-center border-b border-b-azulMarino md:mb-0 md:border-b-0 md:border-r md:border-r-azulMarino'>
						<div className='mx-auto w-[85%] max-w-[485px] md:ml-0'>
							<Text.Title className='mx-auto mb-0 max-w-[315px] text-center md:ml-0 md:text-left'>
								Tu nuevo hogar, Townhouses de Alameda City Homes
							</Text.Title>
							<Text.Title className='text-center md:text-left'> Desde $3,062,000 mxn</Text.Title>

							<ul>
								{ListText.map((text, index) => (
									<li
										key={'list-text-town-' + index}
										className='relative mb-5 pl-6'>
										<div className='absolute left-0 top-1'>
											<Check />
										</div>
										<Text className='mb-0 w-[cal]'>{text}</Text>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className='col-span-1'>
						<div className='ml-auto mr-0 h-full min-h-[380px] w-full md:w-[90%] md:max-w-[580px]'>
							<img
								src={IMG_1}
								alt='Galeria de Townhouses'
								className='h-full w-full object-cover'
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default TownHouseInformation
