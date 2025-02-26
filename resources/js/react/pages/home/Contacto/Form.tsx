import Button from '@components/Button'
import ApiRequest, { type ApiRequestOptions } from '@services/ApiRequest'
import { cn } from '@utils/cn'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const api = new ApiRequest()

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const navigate = useNavigate()

	const onSubmit = data => {
		data.website = 'LandingAlameda'

		const opt: ApiRequestOptions = {
			url: 'api/enviar-webhook',
			method: 'POST',
			data,
			showToast: {
				success: 'Datos enviados correctamente',
				error: 'Error en la solicitud',
			},
			headers: {
				'Content-Type': 'application/json',
			},
		}

		api.fetchData(opt).then(() => {
			reset()
			navigate('/thanks')
		})
	}

	console.log(errors)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='max-w-[570px]'>
			<div className='form-group border-t border-t-azulRey/60'>
				<Input
					name={'nombre'}
					placeholder='Nombre'
					validate={true}
					register={register}
					rules={{ required: 'Campo requerido' }}
				/>
			</div>
			<div className='form-group border-t border-t-azulRey/60'>
				<Input
					name={'apellido'}
					placeholder='Apellido'
					validate={true}
					register={register}
					rules={{ required: 'Campo requerido' }}
				/>
			</div>
			<div className='form-group border-t border-t-azulRey/60'>
				<Input
					name={'correo'}
					placeholder='Correo electrónico'
					validate={true}
					register={register}
					rules={{ required: 'Campo requerido', pattern: { value: /^\S+@\S+$/i, message: 'Correo inválido' } }}
				/>
			</div>
			<div className='form-group border-t border-t-azulRey/60'>
				<Input
					name={'ciudad'}
					placeholder='Ciudad'
					validate={true}
					register={register}
					rules={{ required: 'Campo requerido' }}
				/>
			</div>
			<div className='form-group border-y border-y-azulRey/60'>
				<Input
					name={'telefono'}
					placeholder='Teléfono'
					validate={true}
					register={register}
					rules={{
						required: 'Campo requerido',
						pattern: { value: /^\d+$/, message: 'Solo números' },
						minLength: { value: 10, message: 'Mínimo 10 caracteres' },
					}}
				/>
			</div>

			<div className='pt-6 text-center md:pt-14'>
				<Button
					type='submit'
					className='mx-auto'>
					agendar videollamada
				</Button>
			</div>
		</form>
	)
}

function Input({
	name = '',
	placeholder = '',
	register,
	validate = false,
	rules,
	validateError = '',
	validateErrorMessage = '',
}) {
	return (
		<>
			<input
				{...(validate && register(name, rules))}
				type='text'
				placeholder={placeholder}
				{...(!validate && { name })}
				id={name}
				className={cn(
					'mb-0.5 h-[50px] w-full !border-none !border-white px-6 text-azulRey !shadow-none !outline-none !ring-0 placeholder:text-azulRey',
					validateError && 'border-2 border-red-300 bg-red-100 text-black'
				)}
			/>
			{validateError && <span className='font-mark text-xs text-red-400'>{validateErrorMessage}</span>}
		</>
	)
}

export default Form
