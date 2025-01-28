import IMGMasterplan from '../../../../img/masterplan/masterplan.jpg'
import Container from '../../components/Container'
import { SVGMasterplan } from '../../components/Icons'
import Text from '../../components/Text'

const Masterplan = () => {
	return (
		<div>
			<Container className='relative p-0 lg:p-0'>
				<div className='rounded-sm bg-white p-5 md:absolute md:left-0 md:top-0 md:z-10'>
					<Text.Title className='mb-4'>Disponibilidad</Text.Title>
					<ul className='flex items-center justify-center gap-5 md:flex-col md:items-start md:justify-start md:gap-4'>
						<li className='flex items-center gap-2'>
							<span className='block size-4 rounded-full bg-green-600' /> <Text className='mb-0'>Disponible</Text>
						</li>
						<li className='flex items-center gap-2'>
							<span className='block size-4 rounded-full bg-yellow-300' /> <Text className='mb-0'>Apartado</Text>
						</li>
						<li className='flex items-center gap-2'>
							<span className='block size-4 rounded-full bg-red-600' /> <Text className='mb-0'>Vendido</Text>
						</li>
					</ul>
				</div>

				<div className='relative w-full'>
					<img
						src={IMGMasterplan}
						alt=''
					/>

					<SVGMasterplan className='absolute left-0 top-0 z-10 fill-green-600/50 stroke-green-600' />
				</div>
			</Container>
		</div>
	)
}

export default Masterplan
