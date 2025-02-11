import Container from '@components/Container'

const Footer = () => {
	return (
		<footer className='w-full bg-verdeLimon px-4 py-4 font-bold'>
			<Container className='py-0 lg:py-0'>
				<ul className='mx-auto flex w-full flex-col items-center justify-between text-[10px] uppercase md:flex-row'>
					{/* <li>
						<a href='/'>
							<p>Términos y condiciones</p>
						</a>
					</li> */}
					<li>
						<a href='/'>
							<p>Diseño y desarrollo por MadebyPartners®</p>
						</a>
					</li>
					{/* <li>
						<a href='/'>
							<p>Políticas de privacidad</p>
						</a>
					</li> */}
				</ul>
			</Container>
		</footer>
	)
}

export default Footer
