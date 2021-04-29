import React, { useEffect, useState, useMemo } from "react";
import Card from "../components/Card";
import FormattedJSON from '../components/FormattedJSON'

/**
 * @typedef {Object} LogDataType 
 * @property {number} id
 * @property {string} type
 * @property {string} setup
 * @property {string} punchline
 */


export default function LogdataSearch() {
	const [logs, setLogs] = useState([])
	const [loadingState, setLoadingState ] = useState(null)
	const [searchTerm, setSearchTerm] = useState('')

	function handleSearch(e) {
		setSearchTerm(e.target.value)
	}

	useEffect(()=>{
		setLoadingState('loading')
		fetch("https://official-joke-api.appspot.com/jokes/ten")
			.then(logs => logs.json())
			.then(logs => {
				setLogs(logs)
				setLoadingState('complete')
				console.log(logs)
			})
	}, [])

	/**
	 * Check if string is included in value of 'setup' or 'punchline' 
	 * @param {LogDataType} logEntry 
	 * @param {string} searchTerm 
	 * @returns {boolean}
	 */
	function searchWord(logEntry, searchTerm) {
		const _searchTerm = searchTerm.toLocaleLowerCase()
		if (logEntry.punchline.toLowerCase().includes(_searchTerm) || logEntry.setup.toLowerCase().includes(_searchTerm)) return true
		else return false
	}

	const filteredLogs = useMemo(()=>logs?.filter((el)=>searchWord(el, searchTerm)), [searchTerm, loadingState])
	
	return (
		<Card>
			<h2 className="font-bold text-3xl mb-2">LogdataSearch</h2>
			<input value={searchTerm} placeholder="Filter..." onChange={handleSearch} type="search" className="px-2 py-1 w-full my-3 shadow-sm border border-gray-300 rounded-sm focus:(border-blue-400 outline-none)" />
			{ loadingState == 'loading' && <div>loading...</div> }
			{ loadingState == 'complete' && filteredLogs?.length > 0 &&
				<table className="border-collapse border-gray-900 w-full text-sm">
					<thead>
					<tr>
						<th className="text-left border bg-gray-200 px-2">id</th>
						<th className="text-left border bg-gray-200 px-2">content</th>
					</tr>
					</thead>
					<tbody>
					{ filteredLogs?.map((log)=>(
						<tr key={log.id} className="border-b align-top">
							<td className="px-2 py-1.5">{log.id}</td>
							<td className="px-2 py-1.5 font-mono text-xs text-gray-700 w-full inline-block">
								<FormattedJSON json={log} />
							</td>
						</tr>
					))}
					</tbody>
				</table>
			}
		</Card>
	)
}

//Old Table
{/* { Object.keys(logs[0]).map((key)=>(
	<th tw="text-left border bg-gray-200 px-2">{key}</th>
))}
{ filteredLogs?.map((entry)=>(
	<tr key={entry.id}>
		{Object.values(entry).map((value)=>(
			<td tw="border-b border-t p-2 align-top">{value}</td>
		))}
	</tr>
)) } */}