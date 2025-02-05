import Container from '@components/Container'
import { Logo } from '@components/Icons'
import ImgBG from '@img/bg-contacto.png'
import Form from '@pages/home/Contacto/Form'

const Contacto = () => {
	return (
		<Container>
			<div className='grid grid-cols-1 lg:grid-cols-2'>
				<div className='col-span-1'>
					<Logo className='mx-auto w-[80%] max-w-[290px] fill-azulRey' />

					<Form />
				</div>
				<div className='col-span-1'>
					<img
						src={ImgBG}
						alt='Imagen de contacto'
					/>
				</div>
			</div>
		</Container>
	)
}

export default Contacto
