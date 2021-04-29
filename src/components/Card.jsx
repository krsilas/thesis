import React from 'react'

/**
 * @param {Object} props
 * @param {React.ReactNodeArray} props.children
 * @param {string=} props.sizing
 * @returns {JSX.Element}
 */

function Card({children, sizing}) {
	return (
		<section className={['bg-white p-4 pt-3 rounded shadow-md max-w-2xl', sizing].filter(Boolean).join(' ')}>
			{children}
		</section>
	)	
}

export default Card