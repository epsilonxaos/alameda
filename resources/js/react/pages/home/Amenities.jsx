import Container from '../../components/Container'
import Text from '../../components/Text'

const AmenitiesList = [
	'Salón multiusos con área de asadores',
	'Vigilancia y control de acceso',
	'Todos los servicios a la mano',
	'Juegos infantiles',
	'Estacionamiento para visitas',
	'Áreas verdes',
	'Calle arbolada',
	'Pet friendly',
]

const Amenities = () => {
	return (
		<Container>
			<div className='flex flex-col items-center justify-center lg:flex-row'>
				<div className=''>
					<Text.Title>Amenidades del desarrollo</Text.Title>
				</div>
				<div className='grid grid-cols-1 gap-3 md:grid-cols-4'>
					{AmenitiesList.map((amenity, index) => (
						<div
							className='col-span-1'
							key={'list-ametinities-' + index}>
							{amenity}
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}

export default Amenities
