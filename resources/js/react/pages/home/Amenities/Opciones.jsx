import Container from '../../../components/Container'
import { Cruz } from '../../../components/Icons'
import Text from '../../../components/Text'

const Opciones = () => {
	return (
		<div className='bg-verdeLimon'>
			<Container className='grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
				<div className='col-span-1'>
					<div className='max-w-[410px]'>
						<Text.Title className='text-center md:text-left'>Opciones de ampliación:</Text.Title>
						<Text>
							Cada vivienda tiene se puede personalizar, así como equiparse con diferentes paquetes opcionales.
						</Text>
					</div>
				</div>
				<div className='col-span-1'>
					<ul className='sm:columns-2'>
						<li className='mb-3 md:mb-5'>
							<span className='mr-4 inline-block'>
								<Cruz />{' '}
							</span>{' '}
							Tercera recámara.
						</li>
						<li className='mb-3 md:mb-5'>
							<span className='mr-4 inline-block'>
								<Cruz />{' '}
							</span>{' '}
							Rooftop.
						</li>
						<li className='mb-3 md:mb-5'>
							<span className='mr-4 inline-block'>
								<Cruz />{' '}
							</span>{' '}
							Alberca.
						</li>
						<li className='mb-3 md:mb-5'>
							<span className='mr-4 inline-block'>
								<Cruz />{' '}
							</span>{' '}
							Garage techado.
						</li>
						<li className='mb-3 md:mb-5'>
							<span className='mr-4 inline-block'>
								<Cruz />{' '}
							</span>{' '}
							Otros.
						</li>
					</ul>
				</div>
			</Container>
		</div>
	)
}

export default Opciones
