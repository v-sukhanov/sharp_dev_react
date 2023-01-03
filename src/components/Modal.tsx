import React, { Fragment } from 'react';

export interface ModalProps {
	children: React.ReactNode;
	title: string;
	onClose: () => void
}

export const Modal = ({children, title, onClose}: ModalProps) => {
	return (
		<Fragment>
			<div onClick={onClose} className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"></div>
			<div className="w-[500px] p-5 rounded bg-white absolute top-1/2 left-1/2 -translate-x-1/2">
				<h1 className="text-2xl text-center mb-2">{title }</h1>
				{children}
			</div>
		</Fragment>
	)
}