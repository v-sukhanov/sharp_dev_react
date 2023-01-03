import React from 'react';

export interface ErrorProps {
	error: string;
}

export const Error = ({error}: ErrorProps) => {
	return (
		<span className="text-center text-red-600">{error}</span>
	)
}