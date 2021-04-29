import React from 'react'
/**
 * 
 * @param {{json: Object}} props
 * @returns {JSX.Element}
 */

export default function FormattedJSON({json}) {
	const entries = Object.entries(json)
	return (
		<> { entries.map(([key, value], index) => (
				(key !== 'id') && <div key={key} className="inline break-words">
					<span className="inline-block bg-blue-100 rounded-sm px-0.5 mr-1">{key}:</span>
					<span className="opacity-90">{value}{ entries.length === index+1 ? '' : ', ' }</span>
				</div>
			))
		} </>
	)
} 