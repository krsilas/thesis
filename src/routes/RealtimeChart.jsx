import React from 'react'
import Card from '../components/Card'
import RealtimeLineChart from '../components/RealtimeLineChart'

export default function RealtimeChart() {
	return (
		<Card>
			<h2 className="font-bold text-3xl mb-2">Realtime Chart</h2>
			<RealtimeLineChart />
		</Card>
	)
}
