import { cn } from '@utils/cn'

import type { TButton } from '#types/main'

import { Link } from 'react-router-dom'

const Button = ({ children, onClick, type, className }: TButton) => {
	return (
		<button
			type={type ?? 'button'}
			className={cn('font-apercuPro bg-azulRey px-5 py-4 text-xs uppercase tracking-[1.2px] text-white', className)}
			onClick={onClick}>
			{children}
		</button>
	)
}

const Url = ({ children, href, className }: TButton & { href: string }) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={cn('font-apercuPro bg-azulRey px-5 py-4 text-xs uppercase tracking-[1.2px] text-white', className)}>
			{children}
		</a>
	)
}

const Navigation = ({
	to,
	children,
	onClick,
	className,
}: {
	to: string
	children: React.ReactNode
	onClick?: () => void
	className?: string
}) => {
	return (
		<Link
			to={to}
			className={cn('font-apercuPro bg-azulRey px-5 py-4 text-xs uppercase tracking-[1.2px] text-white', className)}
			onClick={onClick}>
			{children}
		</Link>
	)
}

Button.Url = Url
Button.Navigation = Navigation

export default Button
