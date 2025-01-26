import Container from '../../../components/Container'
import Text from '../../../components/Text'

const Incluye = () => {
	return (
		<div className='bg-verdeLimon/70'>
			<Container className='grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
				<div className='col-span-1'>
					<Text.Title className='text-center md:text-left'>Incluye:</Text.Title>
				</div>
				<div className='col-span-1'>
					<Text className='max-w-[665px]'>
						Llaves monomando en baños y cocina, cancelería en baños, bomba, cisterna, mesetas en mármol para baños
						completos, cocinas con granito en las mesetas y barra desayunadora (además de gabinetes bajo dichas
						mesetas), acabados, carpintería y cancelería tipo residencial, espacio de bodega y área de lavado, bardas
						perimetrales traseras a una altura de 2.70 metros, diferentes opciones de personalización e
						impermeabilización de azotea.
					</Text>
				</div>
			</Container>
		</div>
	)
}

export default Incluye
