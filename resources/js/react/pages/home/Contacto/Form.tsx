import Button from '@components/Button'
import { cn } from '@utils/cn'

import { useState } from 'react'

const Form = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			setName('')
			setEmail('')
			setMessage('')
		} catch (error) {
			if (error.response.status === 422) {
				setErrors(error.response.data.errors)
			}
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='max-w-[570px]'>
			<div className='form-group border-t border-t-azulRey/60'>
				<Input
					name={'nombre'}
					placeholder='Nombre'
				/>
			</div>
			<div className='form-group border-t border-t-azulRey/60'>
				<Input
					name={'apellido'}
					placeholder='Apellido'
				/>
			</div>
			<div className='form-group border-t border-t-azulRey/60'>
				<Input
					name={'correo'}
					placeholder='Correo electrónico'
				/>
			</div>
			<div className='form-group border-t border-t-azulRey/60'>
				<Input
					name={'ciudad'}
					placeholder='Ciudad'
				/>
			</div>
			<div className='form-group border-y border-y-azulRey/60'>
				<Input
					name={'telefono'}
					placeholder='Teléfono'
				/>
			</div>

			<div className='pt-6 text-center md:pt-14'>
				<Button className='mx-auto'>agendar videollamada</Button>
			</div>
		</form>
	)
}

function Input({
	name,
	placeholder,
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
