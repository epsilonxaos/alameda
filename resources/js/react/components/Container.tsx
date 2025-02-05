import { cn } from '@utils/cn'

import type { ReactNode } from 'react'

type TContainerProps = {
	children: ReactNode
	className?: string
}

const Container = ({ children, className }: TContainerProps) => {
	return (
		<section className={cn('relative mx-auto w-full max-w-[1440px] px-6 py-6 lg:px-14 lg:py-14', className)}>
			{children}
		</section>
	)
}

export default Container
