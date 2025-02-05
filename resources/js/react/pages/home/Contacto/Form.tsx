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
		<form onSubmit={handleSubmit}>
			<div className='form-group'>
				<Input />
				<small>{errors.name}</small>
			</div>
			<div className='form-group'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<small>{errors.email}</small>
			</div>
			<div className='form-group'>
				<label htmlFor='message'>Mensaje</label>
				<textarea
					id='message'
					name='message'
					value={message}
					onChange={e => setMessage(e.target.value)}
				/>
				<small>{errors.message}</small>
			</div>
			<button type='submit'>Enviar</button>
		</form>
	)
}

function Input({ name, label, register, validate = false, rules, validateError = '', validateErrorMessage = '' }) {
	return (
		<>
			<input
				{...(validate && register(name, rules))}
				type='text'
				{...(!validate && { name })}
				id={name}
				className={cn`text-crema mb-0.5 h-[50px] w-full bg-opacity-50 px-6 text-center ${validateError && 'border-2 border-red-300 bg-red-100 text-black'} shadow-none outline-none`}
			/>
			{validateError && <span className='font-mark text-xs text-red-400'>{validateErrorMessage}</span>}
		</>
	)
}

export default Form
