import Button from '@components/Button'
import Text from '@components/Text'
import bg from '@img/thanks-bg.jpg'

const Index = () => {
	return (
		<div
			className='flex h-[calc(100vh-47px)] items-center justify-center bg-cover bg-center text-white'
			style={{ backgroundImage: `url(${bg})` }}>
			<div className='w-full max-w-[1440px]'>
				<svg
					width='101'
					height='101'
					viewBox='0 0 101 101'
					fill='none'
					className='mx-auto mb-24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M50.5 100C77.8381 100 100 77.8381 100 50.5C100 23.1619 77.8381 1 50.5 1C23.1619 1 1 23.1619 1 50.5C1 77.8381 23.1619 100 50.5 100Z'
						stroke='white'
						strokeMiterlimit='10'
					/>
					<path
						d='M51.3621 58.3892L72.8035 40.9826V71.691H69.3708V49.1598V48.1101L68.5557 48.7716L51.047 62.9816L33.5382 48.7716L32.7231 48.1101V49.1598V71.691H29.3091V40.9831L50.7317 58.3891L51.0468 58.6451L51.3621 58.3892Z'
						fill='white'
						stroke='white'
					/>
					<path
						d='M32.7625 27.2941L50.735 42.3603L51.0561 42.6295L51.3772 42.3605L69.3669 27.2949L71.4942 29.9385L51.0562 47.0667L30.6194 29.9396L32.7625 27.2941Z'
						fill='white'
						stroke='white'
					/>
				</svg>

				<div className='mx-auto w-[90%] max-w-[830px] bg-azulRey/90 px-10 py-16'>
					<div className='mx-auto max-w-[470px] text-center'>
						<Text.Title className='mb-2'>
							Un nuevo capítulo de tu vida está por comenzar en Alameda City Homes.
						</Text.Title>
						<Text className='mb-6'>
							Estamos emocionados de poder ayudarte a encontrar el espacio perfecto para ti y tus seres queridos.
						</Text>

						<Button.Navigation
							className='mx-auto block max-w-[200px] bg-white text-azulRey'
							to='/'>
							Regresar
						</Button.Navigation>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Index
