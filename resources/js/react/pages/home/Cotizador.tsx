import Container from '@components/Container'
import { IsotipoAzul } from '@components/Icons'
import Text from '@components/Text'

const Cotizador = () => {
	return (
		<div className='bg-menta'>
			<Information />

			<div className='relative'>
				<div className='absolute bottom-0 left-0 z-0 h-[80px] w-full bg-white'></div>

				<div className='mx-auto w-[95%] max-w-[970px] bg-white px-4 py-6 lg:py-14'>
					<Text.Title className='text-center text-azulRey'>Cotizador</Text.Title>

					<div className='mx-auto w-[90%] md:w-[80%]'>
						<div className='mb-4 grid grid-cols-1 gap-4 md:mb-6 md:grid-cols-2'>
							<div className='col-span-1'>
								<Select
									options={[
										{ value: '1', label: 'Selecciona tu lote' },
										{ value: '1', label: 'Opción 1' },
										{ value: '2', label: 'Opción 2' },
										{ value: '3', label: 'Opción 3' },
										{ value: '4', label: 'Opción 4' },
									]}
								/>
							</div>
							<div className='col-span-1'>
								<Select
									options={[
										{ value: '1', label: 'Plazo de mensualidades' },
										{ value: '1', label: 'Opción 1' },
										{ value: '2', label: 'Opción 2' },
										{ value: '3', label: 'Opción 3' },
										{ value: '4', label: 'Opción 4' },
									]}
								/>
							</div>
						</div>
						<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
							<div className='col-span-1'>
								<Input label={'30% Enganche'} />
							</div>
							<div className='col-span-1'>
								<Input label={'20% Contraentrega'} />
							</div>
							<div className='col-span-1'>
								<Input label={'Mensualidad'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Input = ({ label }) => {
	return (
		<div className='relative'>
			<input
				type='text'
				className='user-select-none pointer-events-none mb-1 w-full border-2 border-azulRey p-2 text-center text-sm font-bold focus:outline-none'
			/>

			<label
				htmlFor=''
				className='block text-center text-sm font-bold text-azulRey md:text-left'>
				{label}
			</label>
		</div>
	)
}

const Select = ({ label, options = [] }) => {
	return (
		<div className='relative'>
			<select
				name=''
				id=''
				className='mb-1 w-full border-2 border-azulRey p-2 text-center text-sm font-bold focus:outline-none'>
				{options.map(option => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>

			{/* <label
				htmlFor=''
				className='block text-center text-sm font-bold text-azulRey md:text-left'>
				{label}
			</label> */}
		</div>
	)
}

const Information = () => {
	return (
		<Container className='pb-0 lg:pb-0'>
			<div className='mx-auto mb-6 max-w-max'>
				<IsotipoAzul />
			</div>
			<Text.Title className='mb-0 text-center text-azulMarino'>Financiamiento directo con nosotros</Text.Title>
			<Text.Title className='text-center text-azulMarino'>Desde $3,062,000 mxn</Text.Title>

			<div className='mb-10 flex w-full items-center justify-around'>
				<Text className='text-azulMarino'>30% enganche</Text>
				<Text className='text-azulMarino'>50% Mensualidades</Text>
				<Text className='text-azulMarino'>20% contraentrega</Text>
			</div>

			<Text className='text-center text-xs'>
				Información meramente informativa y sujeto a cambio de precio sin previo aviso*
			</Text>
		</Container>
	)
}

export default Cotizador
