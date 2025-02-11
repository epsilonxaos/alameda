import Container from '@components/Container'
import { Logo } from '@components/Icons'
import ImgBG from '@img/bg-contacto.png'
import Form from '@pages/home/Contacto/Form'

const Contacto = () => {
	return (
		<Container id='contacto'>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
				<div className='order-2 col-span-1 md:order-1 md:py-14'>
					<Logo className='mx-auto mb-[60px] w-[80%] max-w-[290px] fill-azulRey md:mb-[120px]' />

					<Form />
				</div>
				<div className='order-1 col-span-1 md:order-2'>
					<img
						className='h-full min-h-[300px] w-full object-cover'
						src={ImgBG}
						alt='Imagen de contacto'
					/>
				</div>
			</div>
		</Container>
	)
}

export default Contacto
