import Button from '../components/Button'
import Container from '../components/Container'
import { Logo } from '../components/Icons'

const Header = () => {
	return (
		<header className='bg-azulRey w-full'>
			<Container className='flex min-h-[80px] w-full items-center justify-end px-4 py-3 lg:py-5'>
				<div className='absolute left-1/2 top-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 transform'>
					<Logo className='w-[215px] fill-white' />
				</div>

				<Button.Navigation className='text-azulRey hidden bg-white md:block'>¡cotizar ahora!</Button.Navigation>
			</Container>
		</header>
	)
}

export default Header
