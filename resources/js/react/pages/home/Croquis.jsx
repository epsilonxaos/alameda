import Container from '@components/Container'
import Text from '@components/Text'
import IMG_Croquis from '@img/croquis.svg'

const Croquis = () => {
	return (
		<Container>
			<div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-center lg:gap-8'>
				<div className='col-span-1'>
					<div className='mx-auto max-w-[520px] lg:ml-0 lg:max-w-[270px]'>
						<Text.Title className='text-center text-menta lg:text-left'>Mejor ubicación imposible</Text.Title>
						<Text className='text-center lg:text-left'>
							<span className='font-bold'>Alameda City Homes</span> se ubica justo en el corazón de Chuburná de Hidalgo,
							una de las zonas con mayor tradición de Mérida, a menos de 5 minutos de la calle 60 norte. Desde aquí
							tienes a tu disposición un sinfín de servicios, así como un privilegiado acceso a las principales
							vialidades que te conectan prácticamente con cualquier punto de la ciudad.
						</Text>
					</div>
				</div>
				<div className='col-span-1 lg:col-span-2'>
					<img
						src={IMG_Croquis}
						alt='mapa con ubicacion'
						className='w-full'
					/>
				</div>
			</div>
		</Container>
	)
}

export default Croquis
